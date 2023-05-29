import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})
export class ReservaComponent {
  forma!: FormGroup;
  fecha!: Date[];
  minDate: Date = new Date();
  maxDate: Date = new Date();
  defaultDate: Date = new Date();

  @Input() nombrePelicula!: string;

  constructor(private router: Router) {
    this.forma = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      salaS: new FormControl('', Validators.required),
      peli: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
    this.minDate.setHours(9, 0, 0);
    this.maxDate.setHours(21, 0, 0);
    this.defaultDate.setHours(9);
    this.defaultDate.setMinutes(0);
    this.defaultDate.setSeconds(0);
    this.fecha = this.getDisabledDates(new Date());
    console.log(this.nombrePelicula);
  }
  guardarCambios(): void {
    console.log(this.forma);
    this.forma.controls['date'].setValue(
      this.formatDate(this.forma.get('date')?.value)
    );
    console.log(this.forma.value);
    const citas1 = JSON.stringify(this.forma.value);
    const citas = JSON.parse(citas1);
    var citasObject;
    delete citas['[[Prototype]]'];
    const registroCitas = localStorage.getItem('formulario');
    if (registroCitas) {
      citasObject = JSON.parse(registroCitas);
    } else {
      citasObject = [];
    }
    const peliGuardar = this.forma.value.peli;
    console.log(registroCitas);
    console.log(citasObject);
    if (Array.isArray(citasObject) != null) {
      console.log('hay varios');
      for (const cita of citasObject) {
        if (
          cita['salaS'] === citas['salaS'] &&
          cita['date'] === citas['date']
        ) {
          console.log('Cita ya registrada, intente de nuevo');
          Swal.fire({
            icon: 'error',
            title:
              'Cita ya registrada. Cambie los datos de su cita e intente de nuevo',
            showConfirmButton: false,
            timer: 2500,
          });
          this.forma.reset();
          this.forma.patchValue({ peli: peliGuardar });
          return;
        }
      }
    } else {
      console.log('solo hay uno');
      console.log(
        citasObject['salaS'] +
          ' ' +
          citas['salaS'] +
          ' ' +
          citasObject['date'] +
          ' ' +
          citas['date']
      );
      console.log(
        typeof citasObject['salaS'] +
          ' ' +
          typeof citas['salaS'] +
          ' ' +
          typeof citasObject['date'] +
          ' ' +
          typeof citas['date']
      );
      if (
        citasObject['salaS'] === citas['salaS'] &&
        citasObject['date'] === citas['date']
      ) {
        console.log('Cita ya registrada, intente de nuevo');
        Swal.fire({
          icon: 'error',
          title:
            'Cita ya registrada. Cambie los datos de su cita e intente de nuevo',
          showConfirmButton: false,
          timer: 2500,
        });
        this.forma.reset();
        this.forma.patchValue({ peli: peliGuardar });
        return;
      }
    }
    citasObject.push(citas);
    console.log(citasObject);
    localStorage.setItem('formulario', JSON.stringify(citasObject));
    Swal.fire({
      icon: 'success',
      title: 'Reservación exitosa, consulta en el apartado de reservaciones',
      showConfirmButton: false,
      timer: 2600,
    });
    this.router.navigateByUrl('/about');
    this.forma.reset();
    this.forma.patchValue({ peli: peliGuardar });
  }

  disabledDates = (date: Date) => {
    const currentDate = new Date();
    const disabledDates = Array.from(
      {
        length: Math.ceil(
          (date.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
        ),
      },
      (_, index) =>
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() + index
        )
    );
    return disabledDates;
  };
  getDisabledDates(date: Date): Date[] {
    return this.disabledDates(date);
  }
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date
    );
    return formattedDate.replace(',', '');
  }
}
