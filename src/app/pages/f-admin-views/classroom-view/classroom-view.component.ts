import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpClient y HttpHeaders
import { Router } from '@angular/router';
import { Table } from 'src/app/models/table.model';
import { Classroom } from 'src/app/models/classroom.model';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.css']
})
export class ClassroomViewComponent implements OnInit {

  role_nav: string = 'postgraduates';
  route: string = "classroom_view";
  classrooms: Classroom[] = [];

  table_classroom: Table = {
    title: ["ID", "Nombre", "Capacidad", "Estado", "Edificio", "Tipo"],
    li_content: []
  };

  // Inyecta HttpClient en el constructor
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchClassrooms();
  }

  fetchClassrooms() {
    const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Classroom[]>('/api/v1/classroom', { headers: headers })
      .subscribe({
        next: (data) => {
          console.log('Classrooms data received:', data);
          // Asigna los datos de las aulas a la propiedad `li_content` del modelo
          this.classrooms = data;
          this.table_classroom.li_content = this.classrooms.map(classroom => [
            classroom.id.toString(),
            classroom.name,
            classroom.capacity.toString(),
            classroom.state,
            classroom.building.name,
            classroom.classroomType.name
          ]);
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
        }
      });
  }

  navigateToCreateClassroom() {
    this.router.navigate(['/admin/classroom/create']);
  }
}