import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { Building } from 'src/app/models/building.model';
import { Program } from 'src/app/models/program.model';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-programs-view',
  templateUrl: './programs-view.component.html',
  styleUrls: ['./programs-view.component.css']
})
export class ProgramsViewComponent {
  
  role_nav: string = 'postgraduates';
  route: string = "faculty_view";
  programs: Program[] = [];

  table_program: Table = {
    title: ["ID", "Nombre", "Facultad", "Edificio"],
    li_content: []
  };

      // Inyecta el Router en el constructor
      constructor(private http: HttpClient, private router: Router) { }
      

      ngOnInit() {
        this.fetchPrograms();
      }


      fetchPrograms() {
        const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
        if (!token) {
          console.error('No token found!');
          return;
        }
    
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    
        this.http.get<Program[]>('/api/v1/programs', { headers: headers })
          .subscribe({
            next: (data) => {
              console.log('Buildings data received:', data);
              // Asigna los datos de las aulas a la propiedad `li_content` del modelo
              this.programs = data;
              this.table_program.li_content = this.programs.map(program => [
                program.id.toString(),
                program.name,
                program.faculty.name,
                program.faculty.building.name
              ]);
            },
            error: (err) => {
              console.error('Error fetching classrooms:', err);
            }
          });
      }

      // Método para manejar la navegación
      navigateToCreatePrograms() {
        this.router.navigate(['/admin/programs/create']);
      }

}
