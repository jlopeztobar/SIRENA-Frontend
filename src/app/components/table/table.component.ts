import { Component, Input} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Table } from 'src/app/models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() table!: Table;
  @Input() route!: string;
}
