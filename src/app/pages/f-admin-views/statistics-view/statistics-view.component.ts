import { ShareSelectItemService } from './../../../services/shareSelectItem/share-select-item.service';
import { StatisticsComponent } from './../../../components/statistics/statistics.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChartOptions } from 'src/app/components/statistics/statistics.component';
import { delay, switchMap, timeout } from 'rxjs';
import { Statistics } from 'src/app/models/statistics.model';
interface Almacenamiento {
  entity_ids: number[];
  cantidad_elementos: number;
}
@Component({
  selector: 'app-statistics-view',
  templateUrl: './statistics-view.component.html',
  styleUrls: ['./statistics-view.component.css'],
})
export class StatisticsViewComponent {
 
  constructor(
    private http: HttpClient,
    private ShareSelectItemService: ShareSelectItemService
  ) {}
  

  //vars
  
  ent_ids!: number;
  role_nav: string = 'postgraduates';
  option_statistic!: string;
  booking_count: number[] = [];
  vBool: boolean = true;
  option_selected: string = ''
  //Inputs
  categories: string[] = [];
  data_graph: number[] = [];

  ngOnInit(): void {
    this.fetchStatistics();
  }

  fetchStatistics() {
    const token = localStorage.getItem('jwt');

    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<Statistics>('/api/v1/statistics/classroom', { headers: headers })
      .subscribe({
        next: (data) => {
          // Verifica que la respuesta tenga la estructura esperada
          if (Array.isArray(data)) {
            // Almacena los entity_ids y la cantidad de elementos para cada objeto en la respuesta
            data.map((item) => {
              this.data_graph.push(item.bokings_ids ? item.bokings_ids.length : 0);
              this.categories.push(item.entity_id);
              console.log("LONGITUD",this.data_graph,"IDS",this.categories);
            });
            // Aquí puedes hacer más cosas con los resultados si es necesario
          } else {
            console.error('Invalid response format:', data);
          }
        },
        error: (err) => {
          console.error('Error fetching classrooms:', err);
          // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario
        },
      });
  }
}
