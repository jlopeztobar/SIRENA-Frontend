import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-faculties',
  templateUrl: './crud-faculties.component.html',
  styleUrls: ['./crud-faculties.component.css']
})
export class CrudFacultiesComponent implements OnInit  {


    
  constructor(private http: HttpClient, private router: Router) {}


  role_nav: string = 'postgraduates';
  private headers!: HttpHeaders; // Variable para los headers
  public BuildingType: any[] = [];

  ngOnInit(): void {
    this.initializeHeaders();
    this.loadFacultiesType();
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

  private async loadFacultiesType() {
    try {
      const response2 = await this.http.get('api/v1/building', { headers: this.headers }).toPromise();
      this.BuildingType = response2 as any[];
      console.log(this.BuildingType + " tipos de edificio");
      console.log(response2);
    } catch (error) {
      console.error('Hubo un error al cargar los edificios', error);
      // Maneja el error adecuadamente aquí
    }
  }

  async registerFaculties(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const fac_name = (form.querySelector('#nombreFacultad') as HTMLInputElement).value;

    const buildingTypeSelect = form.querySelector('#tipoEdificio') as HTMLSelectElement;
    const fac_building_id = buildingTypeSelect.selectedOptions[0].getAttribute('data-id');
    const buildingTypeName = buildingTypeSelect.value;

    console.log(buildingTypeName)

  
    const classroomData = {
      fac_name,
      fac_building_id,
    };

    console.log('JSON que se enviará:', JSON.stringify(classroomData, null, 2));

    try {
      const response = await this.http.post('/api/v1/faculty', classroomData, { headers: this.headers }).toPromise();
      console.log(response);
      alert('Facultad creada exitosamente');
      this.router.navigate(['admin/home']);
    } catch (error) {
      console.error('Hubo un error al crear la facultad', error);
      // Aquí podrías manejar diferentes tipos de errores y dar feedback correspondiente.
    }
  }
  

}
