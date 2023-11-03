

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
  styleUrls: ['./nav-side-bar.component.css']
})
export class NavSideBarComponent {
  constructor(private router: Router) {}
  logout(): void {
    localStorage.clear(); // Limpia el localStorage completamente
    // o puedes usar localStorage.removeItem('tuItem') para borrar un ítem específico
    this.router.navigate(['/login']); // Redirige al usuario a la ruta de login
  }
}


