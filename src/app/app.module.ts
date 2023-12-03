import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
// Importar TableComponent si se declara aquí
// import { TableComponent } from './path/to/table.component';

@NgModule({
  declarations: [
    AppComponent,
    // TableComponent, // Añadir TableComponent aquí si se declara en este módulo
  ],
  imports: [
    BrowserModule,
    FormsModule, // Añadir FormsModule
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
