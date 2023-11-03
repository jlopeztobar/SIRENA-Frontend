import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.css']
})
export class CRUDUsersComponent {
  // Injecta HttpClient y Router en tu componente
  constructor(private http: HttpClient, private router: Router) {}

  // Método para manejar el envío del formulario
  async registerUser(event: any) {
    event.preventDefault();

    const target = event.target;
    const usr_name = target.querySelector('#nombreUsuario').value;
    const usr_firstname = target.querySelector('#nombre').value;
    const usr_lastname = target.querySelector('#apellido').value;
    const usr_email = target.querySelector('#email').value;
    const usr_password = target.querySelector('#contrasena').value;
    const usr_role = target.querySelector('#rol').value.toUpperCase();

    const requestBody = {
      usr_name,
      usr_firstname,
      usr_lastname,
      usr_email,
      usr_password,
      usr_role
    };

    const token = localStorage.getItem('jwt');

    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Hacer la solicitud POST
    try {
      const response = await this.http.post('/api/v1/user', requestBody, { headers: headers }).toPromise();
      console.log(response);
      // Alerta para el usuario
      alert('Usuario creado');
      // Redirección a admin/home
      this.router.navigate(['admin/home']);
    } catch (error) {
      console.error('Hubo un error al crear el usuario', error);
      // Aquí podrías manejar diferentes tipos de errores y dar feedback correspondiente
    }
  }
}
