import { Component, inject} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent {
  
  //Se debe hacer un array de usuarios para iterarlos


  //Aqui va la ruta que de el acceso, este solo es un ejemplo
  route:string = "users_view";

  //Un ejemplo de como se debe usar las tablas, con el fetch setearlas
  table_user: Table = {
    title: ["Nombre","Correo","Codigo", "Programa", "Rol"],
    li_content: ["Juan Camilo C","JuanCamilo@gmail.com","100932902", "Fisica", "Pasivo"],
    img:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  };  
}
