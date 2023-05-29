import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { NgbPaginationModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { AboutComponent } from './about/about.component';
import { DomseguroPipe } from './about/domseguro.pipe';
import { DulceComponent } from './dulce/dulce.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FooterComponent } from './footer/footer.component';
import { ReservaComponent } from './reserva/reserva.component';
import { CitasRegistradasComponent } from './citas-registradas/citas-registradas.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    AboutComponent,
    PeliculasPosterComponent,
    DomseguroPipe,
    DulceComponent,
    FooterComponent,
    ContactanosComponent,
    ReservaComponent,
    CitasRegistradasComponent,
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    AboutComponent,
    PeliculasPosterComponent,
    DulceComponent,
    ContactanosComponent,
    FooterComponent,
    ReservaComponent,
    CitasRegistradasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule, 
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    CardModule,
    TableModule
  ]
})
export class SharedModule { }
