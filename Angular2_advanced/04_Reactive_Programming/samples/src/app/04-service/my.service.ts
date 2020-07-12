import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NextObserver } from 'rxjs/Observer';

@Injectable()
export class MyService {

    private observable: Observable<number>;

    constructor() {
        this.observable = this.start();
    }

    private start(): Observable<number> {
        let stream = new Observable<number>(function (observer) {
            let value = 0;
            setInterval(() => {
                value++;
                observer.next(value);
            }, 1000);
        })
            .publish()
            .refCount(); // 1 вариант
        //stream.connect(); // 2 вариант
        return stream;
    }

    public subscribe(observer: (value: number) => void) {
        return this.observable.subscribe(observer);
    }

}
