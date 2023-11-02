// pages-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes
import { BookingViewComponent } from 'src/app/pages/f-admin-views/booking-view/booking-view.component'
import { ClassroomViewComponent } from 'src/app/pages/f-admin-views/classroom-view/classroom-view.component';
import { HomeAdminComponent } from 'src/app/pages/f-admin-views/home-admin/home-admin.component';
import { UsersViewComponent } from 'src/app/pages/f-admin-views/users-view/users-view.component';
import { LoginComponent } from 'src/app/pages/f-session-views/login-page/login.component';
import { HomeUserComponent } from 'src/app/pages/f-user-views/home-user/home-user.component';
import { CRUDUsersComponent } from 'src/app/pages/f-cruds/crud-users/crud-users.component';
import { CRUDClassroomComponent } from './pages/f-cruds/crud-classroom/crud-classroom.component';
import { CRUDReservationComponent } from './pages/f-cruds/crud-reservation/crud-reservation.component';
// ... importa los demás componentes de cruds

const routes: Routes = [
  { path: 'admin/booking', component: BookingViewComponent },
  { path: 'admin/classroom', component: ClassroomViewComponent },
  { path: 'admin/home', component: HomeAdminComponent },
  { path: 'admin/users', component: UsersViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/home', component: HomeUserComponent },
  {path: 'admin/users/create', component: CRUDUsersComponent},
  {path: 'admin/classroom/create', component: CRUDClassroomComponent},
  {path: 'admin/booking/create', component: CRUDReservationComponent},
  {path: '', component: HomeAdminComponent}
  // ... añade las rutas para los componentes dentro de f-cruds
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
