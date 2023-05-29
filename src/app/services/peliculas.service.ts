import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interface';
import { MovieDetails } from '../interfaces/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private serverURL:string = 'https://api.themoviedb.org/3';
  private peliculaPage = 1;
  cargando = false;

  constructor(private http:HttpClient) { }


  get params(){
    return{
      api_key : '800c16a7946ec340c5f8a23a01924221',
      language : 'es-ES',
      page : this.peliculaPage.toString()
    }
  }

  getPeliculas():Observable<Movie[]>{
    if (this.cargando){
      return of([]);
    }

    this.cargando = true;

    console.log('Ver peliculas cargadas')

    return this.http.get<PeliculasResponse>(`${this.serverURL}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>{
        this.peliculaPage+=1;
        this.cargando = false;
      })
    );
  }

  buscarPeliculas(texto:string):Observable<Movie[]>{

    /*   https://api.themoviedb.org/3/search/movie?api_key=800c16a7946ec340c5f8a23a01924221&language=es-ES&query=avengers&page=1&include_adult=false
     */
      const params = {...this.params, page:1, query:texto};
    
      return this.http.get<PeliculasResponse>(`${this.serverURL}/search/movie`,{
        params
      }).pipe(
        map(res=>res.results)
      )
    
    
    }  

    getPeliculaDetalle(id:string){

      return this.http.get< MovieDetails>(`${this.serverURL}/movie/${id}`,{
        params:this.params
      }).pipe(

        catchError(err => of(null))
    
      )
      
    }

  resetPeliculaPage(){
    this.peliculaPage =1;
  }

}


