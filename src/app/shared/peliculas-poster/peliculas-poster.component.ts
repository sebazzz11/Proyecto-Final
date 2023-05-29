import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.css']
})
export class PeliculasPosterComponent implements OnInit {

  @Input() movies?:Movie[];
 
  constructor(config: NgbRatingConfig, private router: Router) {
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    console.log(this.movies)
  }

  onMovieClick(movie:Movie){
    this.router.navigate(['/pelicula', movie.id])
  }

}