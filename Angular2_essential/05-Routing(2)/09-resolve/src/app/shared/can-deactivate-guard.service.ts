import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

// Интерфейс, который необходимо реализовать в компоненте, который может отменить перенаправления пользователя
// в случае необходимости.
export interface CanComponentDeactivate {
    // если метод вернет true перенаправление возможно, false - нет.
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
        // проверяем наличие метода canDeactivate и вызов его.
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
