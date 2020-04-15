import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    // ActivatedRouteSnapshot - информация о маршруте связанного с загруженым компонентом.
    // RouterStateSnapshot - состояние маршрута в определенный отрезок времени.
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            this.authService.redirectUrl = state.url;

            this.router.navigate(["/login"]);
            return false;
        }
        
    }
}

