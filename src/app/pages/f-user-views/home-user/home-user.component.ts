import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent {
  constructor(private router: Router) {}

  salir(): void {
    localStorage.clear(); // Limpia el localStorage completamente
    this.router.navigate(['/login']); // Redirige al usuario a la ruta de login
  }
}
