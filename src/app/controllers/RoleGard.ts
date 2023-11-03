import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = localStorage.getItem('role');

    if (route.data['roles'] && route.data['roles'].indexOf(role) === -1) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
