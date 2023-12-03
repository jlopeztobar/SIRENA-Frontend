import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { Building } from 'src/app/models/building.model';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-building-view',
  templateUrl: './building-view.component.html',
  styleUrls: ['./building-view.component.css']
})
export class BuildingViewComponent {
  
  role_nav: string = 'postgraduates';
  route: string = "classroom_view";
  buildings: Building[] = [];

  table_building: Table = {
    title: ["ID", "Nombre"],
    li_content: []
  };

    // Inyecta el Router en el constructor
    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
      this.fetchBuildings();
    }

    fetchBuildings() {
      const token = localStorage.getItem('jwt'); // Suponiendo que se use autenticación JWT
      if (!token) {
        console.error('No token found!');
        return;
      }
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      this.http.get<Building[]>('/api/v1/building', { headers: headers })
        .subscribe({
          next: (data) => {
            console.log('Buildings data received:', data);
            // Asigna los datos de las aulas a la propiedad `li_content` del modelo
            this.buildings = data;
            this.table_building.li_content = this.buildings.map(building => [
              building.id.toString(),
              building.name
            ]);
          },
          error: (err) => {
            console.error('Error fetching classrooms:', err);
          }
        });
    }
    
    // Método para manejar la navegación
    navigateToCreateBooking() {
      this.router.navigate(['/admin/building/create']);
    }

}
