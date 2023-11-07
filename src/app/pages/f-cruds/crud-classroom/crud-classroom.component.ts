import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-classroom',
  templateUrl: './crud-classroom.component.html',
  styleUrls: ['./crud-classroom.component.css']
})
export class CRUDClassroomComponent implements OnInit {

  
  constructor(private http: HttpClient, private router: Router) {}

  private headers!: HttpHeaders; // Variable para los headers
  public classroomTypes: any[] = [];

  ngOnInit(): void {
    this.initializeHeaders();
    this.loadClassroomTypes();
  }

  private initializeHeaders(): void {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No token found!');
      return;
    }

    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  private async loadClassroomTypes() {
    try {
      const response2 = await this.http.get('api/v1/classroomType', { headers: this.headers }).toPromise();
      this.classroomTypes = response2 as any[];
      console.log(this.classroomTypes + "log");
    } catch (error) {
      console.error('Hubo un error al cargar los tipos de salón', error);
      // Maneja el error adecuadamente aquí
    }
  }

  async registerClassroom(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const name = (form.querySelector('#nombreSalon') as HTMLInputElement).value;
    const capacity = Number((form.querySelector('#capacidad') as HTMLInputElement).value);
    const state = (form.querySelector('#estadoSalon') as HTMLInputElement).value;
    const classroomTypeSelect = form.querySelector('#tipoSalon') as HTMLSelectElement;
    const classroomTypeId = classroomTypeSelect.selectedOptions[0].getAttribute('data-id');
    const classroomTypeName = classroomTypeSelect.value;
    // Asegúrate de que la propiedad "building" exista en tu formulario si es necesaria para tu objeto JSON.
    const building = (form.querySelector('#edificio') as HTMLInputElement)?.value || '';
    const response2 = await this.http.get('api/v1/classroomType', { headers: this.headers }).toPromise();

   
    const classroomData = {
      name,
      capacity,
      state,
      building,
      classroomType: {
        id: classroomTypeId ? parseInt(classroomTypeId, 10) : null,
        name: classroomTypeName
      },
      userList: []
    };

    console.log('JSON que se enviará:', JSON.stringify(classroomData, null, 2));

    try {
      const response = await this.http.post('/api/v1/classroom', classroomData, { headers: this.headers }).toPromise();
      console.log(response);
      alert('Salón creado exitosamente');
      this.router.navigate(['admin/home']);
    } catch (error) {
      console.error('Hubo un error al crear el salón', error);
      // Aquí podrías manejar diferentes tipos de errores y dar feedback correspondiente.
    }
  }
}
