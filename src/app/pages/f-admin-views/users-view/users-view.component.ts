// users-view.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {
  route: string = "users_view";
  
  // Inicializa table_user con un objeto que se ajuste a la interfaz Table
  table_user: Table = {
    title: ["ID", "Username", "Name", "Email", "Status", "Role"],
    li_content: [],
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

    this.http.get<any[]>('/api/v1/user', { headers: headers })
      .subscribe({
        next: (users) => {
          console.log('Users data received:', users); // Muestra el JSON en la consola
          this.table_user.li_content = users.map(user => [
            user.usr_id.toString(), // Convierte a string
            user.usr_name,
            `${user.usr_firstname} ${user.usr_lastname}`,
            user.usr_email,
            user.usr_status ? 'Active' : 'Inactive',
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
