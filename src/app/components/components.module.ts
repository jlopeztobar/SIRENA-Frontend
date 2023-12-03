import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { StatisticsComponent } from './statistics/statistics.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ShareSelectItemService } from '../services/shareSelectItem/share-select-item.service';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    CardComponent,
    GraphicSectionComponent,
    NavSideBarComponent,
    NavBarComponent,
    TableComponent,
    GraphComponent,
    StatisticsComponent,
    DropdownComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardComponent,
    GraphicSectionComponent,
    NavSideBarComponent,
    NavBarComponent,
    TableComponent,
    GraphComponent,
    StatisticsComponent,
    DropdownComponent
  ],
  providers: [ShareSelectItemService]
})
export class ComponentsModule { }
