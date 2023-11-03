import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.component.html',
  styleUrls: ['./booking-view.component.css']
})
export class BookingViewComponent {

  // Se debe hacer un array de salones para iterarlos

  // Aqui va la ruta que de el acceso, este solo es un ejemplo
  route: string = "booking_view";

  // Un ejemplo de como se debe usar las tablas, con el fetch setearlas
  /*table_booking: Table = {
    title: ["Estado","Salon","Edificio", "Fecha de solicitud", "Fecha de reserva", "Coordinador", "Programa"],
    li_content: ["Pendiente","201","Fisica", "10/10/2023", "11/11/2023", "Juanito", "Fisica"]
  };*/  

  // Inyecta el Router en el constructor
  constructor(private router: Router) { }

  // Método para manejar la navegación
  navigateToCreateBooking() {
    this.router.navigate(['/admin/booking/create']);
  }
}
