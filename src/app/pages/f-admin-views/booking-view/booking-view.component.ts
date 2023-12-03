import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { Booking } from 'src/app/models/booking.model';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-booking-view',
  templateUrl: './booking-view.component.html',
  styleUrls: ['./booking-view.component.css']
})
export class BookingViewComponent {

  // Aqui va la ruta que de el acceso, este solo es un ejemplo
  route: string = "booking_view";
  bookings : Booking[] = [];
  role_nav: string = 'postgraduates';

  // Un ejemplo de como se debe usar las tablas, con el fetch setearlas
  table_booking: Table = {
    title: ["ID","Estado","Salon","Edificio", "Fecha de solicitud", "Fecha de reserva", "Coordinador", "Programa"],
    li_content: []
  }; 

  // Inyecta el Router en el constructor
  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(){
    this.fetchBookings();
  }

  fetchBookings() {
    const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Booking[]>('/api/v1/bookings', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log('Bookings data received:', data);
          // Asigna los datos de las aulas a la propiedad `li_content` del modelo
          this.bookings = data;
          this.table_booking.li_content = this.bookings.map(booking => [
            booking.rsv_id.toString(),
            booking.rsv_estado,
            booking.rsv_cls_id.toString(),
            booking.rsv_faculty_id.toString(),
            booking.rsv_fecha_solicitud,
            booking.rsv_fecha_reserva_inicio,
            booking.rsv_usr.username,
            booking.rsv_program_id.toString()
          ]);
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        }
      });
  }


  // Método para manejar la navegación
  navigateToCreateBooking() {
    this.router.navigate(['/admin/booking/create']);
  }
}
