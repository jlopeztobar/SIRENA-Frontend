import { Component } from '@angular/core';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.css']
})
export class ClassroomViewComponent {

//Se debe hacer un array de salones para iterarlos


//Aqui va la ruta que de el acceso, este solo es un ejemplo
  route: string = "classroom_view";

//Un ejemplo de como se debe usar las tablas, con el fetch setearlas
  table_classroom: Table ={
    title: ["Salon", "Capacidad", "Tipo", "Edificio", "Estado"],
    li_content: ["201", "20", "Agua", "Fisica"],
    state: "804000"
  }
}
