import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccesswindowComponent } from './successwindow/successwindow.component';
import { ReservationformComponent } from './reservationform/reservationform.component';
import { CreatereservationComponent } from './createreservation/createreservation.component';
import { ViewcalendarComponent } from './viewcalendar/viewcalendar.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';
import { DeletereservationComponent } from './deletereservation/deletereservation.component';
import { ConfigurescheduleComponent } from './configureschedule/configureschedule.component';
import { DisableclassroomComponent } from './disableclassroom/disableclassroom.component';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccesswindowComponent,
    ReservationformComponent,
    CreatereservationComponent,
    ViewcalendarComponent,
    UpdatereservationComponent,
    DeletereservationComponent,
    ConfigurescheduleComponent,
    DisableclassroomComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
