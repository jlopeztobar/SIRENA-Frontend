// users-view.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Table } from 'src/app/models/table.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  //Se crea para mostrar la side bar correcta
  role_nav: string = 'postgraduates';

  //Se crea la ruta para especificar que tipo de tabla se debe mostrar
  route: string = "users_view";
  
  // Se crea una lista de usuarios para que el tipado sea mejor
  users: User[] = [];
  
  // Inicializa table_user con un objeto que se ajuste a la interfaz Table
  table_user: Table = {
    title: ["ID", "Username", "Name", "Email", "Status", "Role"],
    li_content: [] ,
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  };
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<User[]>('/api/v1/user', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log('Users data received:', data); // Muestra el JSON en la consola
          this.users = data;
          this.table_user.li_content = this.users.map(user => [
            user.usr_id.toString(),
            user.usr_name,
            `${user.usr_firstname} ${user.usr_lastname}`,
            user.usr_email,
            user.usr_status ? 'Activo' : 'Inactivo',
            user.usr_role
          ]);
        },
        error: (err) => {
          console.error('Error al obtener los usuarios', err);
        }
      });
  }

  navigateToCreateUser() {
    this.router.navigate(['/admin/users/create']);
  }
}
