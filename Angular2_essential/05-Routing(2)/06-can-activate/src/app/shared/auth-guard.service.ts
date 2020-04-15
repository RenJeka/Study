import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
/*
    Guard - механизм для выполнения проверок перед активацией и деактивацией маршрута

    CanActivate - Определяет возможность активации маршрута
    CanActivateChild - Определяет возможность активации дочерних маршрутов текущего маршрута
    CanDeactivate - Определяет можно ли уйти с компонента загруженого по текущему маршруту
    CanLoad - Определяет может ли модуль загрузиться с использованием lazy loading

    Установка объектов Guard происходит при настройке маршрутизации.
    В данном примере Guard используется в файле /settings/settings-routing.module.ts
*/

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    // Observable<boolean>|Promise<boolean>|boolean - возможные результаты работы метода
    // Если возвращенное значение true маршрут будет активирован, иначе - нет
    canActivate() {
        let value = true;
        console.log("AuthGuard canActivate return " + value);
        return value;
    }
}

