import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HomeComponent } from './home/home.component';
import { PipesModule } from '../pipes/pipes.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    SharedModule,
    NgbRatingModule
  ]
})
export class PagesModule { }
