import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { Booking } from 'src/app/models/booking.model';
import { Table } from 'src/app/models/table.model';


@Component({
  selector: 'app-booking-teacher-view',
  templateUrl: './booking-teacher-view.component.html',
  styleUrls: ['./booking-teacher-view.component.css']
})
export class BookingTeacherViewComponent {
  role_nav: string = 'teacher';
  route: string = "booking_view";
  bookings : Booking[] = [];
  private headers!: HttpHeaders;

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
    const rsv_usr_id = localStorage.getItem("id");
    const url = `/api/v1/bookings/user/${rsv_usr_id}`;
    const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Booking[]>(url, { headers: headers })
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
    this.router.navigate(['/user/booking/create']);
  }
  recibirDatos(datos: any) {
    console.log('Datos recibidos:', datos);
    this.createIncidence(datos);
  }
  async createIncidence(datos:any){
    try {
      const ins_name = datos.texto;
      const ins_teacher_name = localStorage.getItem("name");
      const ins_type = datos.opcion;
      const incidenceData = {
        ins_name,
        ins_teacher_name,
        ins_type
      };
  
      // Obteniendo el token
      const token = localStorage.getItem('jwt');
      if (!token) {
          console.error('No token found!');
          return;
      }
  
      // Configuración de los headers
      const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
      });
  
      // Realizar una solicitud POST para crear la incidencia y obtener la respuesta
      const response:any = await this.http.post(`/api/v1/incidence`, incidenceData, { headers: headers }).toPromise();
  
      // Capturar el ID de la incidencia creada
      const incidenceId = response.ins_id;
      console.log('Incidencia creada con ID:', incidenceId);
      await this.updateBookingWithIncidence(datos.bookingId, incidenceId);
  
      // Aquí puedes usar incidenceId para lo que necesites
  
      this.fetchBookings();
    } catch (e: any) {
      // Manejar los errores de la solicitud
      if (e && e.error && typeof e.error === 'string') {
          alert(e.error);
      } else {
          console.error("Error general: " + JSON.stringify(e));
      }
    }
  }
  async updateBookingWithIncidence(bookingId:any, incidenceId:any) {
    try {
        // Obteniendo el token
        const token = localStorage.getItem('jwt');
        if (!token) {
            console.error('No token found!');
            return;
        }

        // Configuración de los headers
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        const booking:any = await this.http.get<Booking>(`/api/v1/bookings/${bookingId}`, { headers: headers }).toPromise();
        if (booking.rsv_incidencia) {
          booking.rsv_incidencia_id = booking.rsv_incidencia;
          delete booking.rsv_incidencia;
      }

      delete booking.rsv_id;
      booking.rsv_incidencia_id = incidenceId;

        
        if (booking.rsv_usr && booking.rsv_usr.id) {
          booking.rsv_usr_id = booking.rsv_usr.id;
      }
      delete booking.rsv_usr;
      delete booking.rsv_id;

        // Preparar el objeto con el ID de la incidencia

        console.log('Booking to be updated:', booking);

        // Realizar una solicitud PUT para actualizar la reserva
        await this.http.put(`/api/v1/bookings/${bookingId}`, booking, { headers: headers }).toPromise();
        console.log('Reserva actualizada con la incidencia ID:', incidenceId);

        // Aquí puedes agregar cualquier lógica adicional después de la actualización
    } catch (e: any) {
        // Manejar los errores de la solicitud
        if (e && e.error && typeof e.error === 'string') {
            alert(e.error);
        } else {
            console.error("Error general: " + JSON.stringify(e));
        }
    }
}

  

  onReservationAction(event:any) {
    console.log("Reservation ID:", event.id, "Action:", event.action);
    this.updateBooking(event);
}

async updateBooking(event: any) {
  const token = localStorage.getItem('jwt');
  if (!token) {
      console.error('No token found!');
      return;
  }

  const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
  });

  try {
      // Obtener la reserva
      const booking:any = await this.http.get<Booking>(`/api/v1/bookings/${event.id}`, { headers: headers }).toPromise();

      // Modificar el estado de la reserva según la acción
      booking.rsv_estado = event.action === 'accept' ? 'Aceptada' : 'Rechazada';

      // Ajustar el campo rsv_usr_id y eliminar rsv_usr
      if (booking.rsv_usr && booking.rsv_usr.id) {
          booking.rsv_usr_id = booking.rsv_usr.id;
      }
      delete booking.rsv_usr;
      delete booking.rsv_id;


      console.log('Booking to be updated:', booking);
      // Realizar una solicitud PUT para actualizar la reserva
      await this.http.put(`/api/v1/bookings/${event.id}`, booking, { headers: headers, responseType: 'text' }).toPromise();
      alert("reserva modificada a:" + booking.rsv_estado)
      console.log('Booking updated successfully');
      this.fetchBookings();
      // Puedes añadir aquí más lógica después de la actualización exitosa
  } catch (e: any) {
      // Manejar los errores de la solicitud
      if (e && e.error && typeof e.error === 'string') {
          alert(e.error);
      } else {
          console.error("Error general: " + JSON.stringify(e));
      }
  }
}
}
