import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetails } from 'src/app/interfaces/pelicula.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit{
  
  pelicula?:MovieDetails;

  constructor(private peliculasSvc:PeliculasService, private activatedRoute:ActivatedRoute, private router:Router, private config:NgbRatingConfig){
    config.max = 10;
    config.readonly = true;
  }
  
  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    console.log(id)

    this.peliculasSvc.getPeliculaDetalle(id).subscribe(movie=>{
      
      if(!movie){
        this.router.navigateByUrl('/');
        return;
      }
      
      this.pelicula = movie;
    });
  }

}
