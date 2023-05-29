import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { AboutComponent } from './shared/about/about.component';
import { DulceComponent } from './shared/dulce/dulce.component';
import { ContactanosComponent } from './shared/contactanos/contactanos.component';
import { ReservaComponent } from './shared/reserva/reserva.component';
import { CitasRegistradasComponent } from './shared/citas-registradas/citas-registradas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dulce', component: DulceComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'reservaciones', component: CitasRegistradasComponent},

  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
