import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpClient y HttpHeaders
import { Router } from '@angular/router';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.css']
})
export class ClassroomViewComponent implements OnInit {

  table_classroom: Table = {
    title: ["ID", "Name", "Capacity", "State", "Building", "Type"],
    li_content: [],
    img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
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

    this.http.get<any[]>('/api/v1/classroom', { headers: headers })
      .subscribe({
        next: (classrooms) => {
          console.log('Classrooms data received:', classrooms);
          // Asigna los datos de las aulas a la propiedad `li_content` del modelo
          this.table_classroom.li_content = classrooms.map(classroom => [
            classroom.id.toString(),
            classroom.name,
            classroom.capacity.toString(),
            classroom.state,
            classroom.building,
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