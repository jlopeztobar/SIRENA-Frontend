import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-building',
  templateUrl: './crud-building.component.html',
  styleUrls: ['./crud-building.component.css']
})
export class CrudBuildingComponent {
  role_nav: string = 'postgraduates';
  constructor(private http: HttpClient, private router: Router) {}

  async registerBuilding(event: any) {
    event.preventDefault();
    const name = event.target.querySelector('#name').value;
    
    const requestBody = {
      name,
      facultades: []
    };

    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No token found!');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    try {
      const response = await this.http.post('/api/v1/building', requestBody, { headers: headers }).toPromise();
      console.log(response);
      alert('Edificio creado');
      this.router.navigate(['admin/home']);
    } catch (error) {
      console.error('Hubo un error al crear el edificio', error);
    }
  }
}
