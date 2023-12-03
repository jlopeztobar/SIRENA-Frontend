import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-programs',
  templateUrl: './crud-programs.component.html',
  styleUrls: ['./crud-programs.component.css']
})
export class CrudProgramsComponent implements OnInit{

      
  constructor(private http: HttpClient, private router: Router) {}


  role_nav: string = 'postgraduates';
  private headers!: HttpHeaders; // Variable para los headers
  public facultiesType: any[] = [];

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
      const response2 = await this.http.get('api/v1/faculty', { headers: this.headers }).toPromise();
      this.facultiesType = response2 as any[];
      console.log(this.facultiesType + " tipos de facultad");
      console.log(JSON.stringify(response2));
    } catch (error) {
      console.error('Hubo un error al cargar los edificios', error);
      // Maneja el error adecuadamente aquí
    }
  }
  async registerPrograms(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
  
    // Obtener el nombre del programa.
    const programName = (form.querySelector('#name') as HTMLInputElement).value;
  
    // Obtener la facultad seleccionada y su ID.
    const facultiesTypeSelect = form.querySelector('#nombreFacultad') as HTMLSelectElement;
    const facultyId = facultiesTypeSelect.selectedOptions[0].getAttribute('data-id');
  
    // Buscar la facultad seleccionada en tu JSON de facultades.
    const selectedFaculty = this.facultiesType.find(faculty => faculty.id.toString() === facultyId);
  
    if (!selectedFaculty) {
      console.error('Facultad no encontrada');
      return; // O manejar este caso de forma adecuada.
    }
  
    // Estructura de datos para la API.
    const programsData = {
      name: programName,
      faculty: {
        id: selectedFaculty.id,
        name: selectedFaculty.name,
        building: {
          id: selectedFaculty.building.id,
          name: selectedFaculty.building.name
        }
      }
    };
  
    console.log('JSON que se enviará:', JSON.stringify(programsData, null, 2));
  
    try {
      const response = await this.http.post('/api/v1/programs', programsData, { headers: this.headers }).toPromise();
      console.log(response);
      alert('Programa creado exitosamente');
      this.router.navigate(['admin/home']);
    } catch (error){
      console.error('Hubo un error al crear el programa', error);
      // Aquí podrías manejar diferentes tipos de errores y dar feedback correspondiente.
    }
  }


}

 