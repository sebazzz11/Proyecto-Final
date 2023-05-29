import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas-registradas',
  templateUrl: './citas-registradas.component.html',
  styleUrls: ['./citas-registradas.component.css'],
})
export class CitasRegistradasComponent implements OnInit {
  columnas: String[] = [
    'Nombre',
    'Correo',
    'Sala',
    'Pelicula elegida',
    'Fecha',
  ];
  citas: any[] = [];

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  constructor() {
    const valores = localStorage.getItem('formulario');
    if (valores) {
      this.citas = JSON.parse(valores);
    } else {
    }
  }
}