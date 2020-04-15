import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'


// Для создания fake backend
// 1) npm install --save angular-in-memory-web-api
// 2) добавить в imports AppModule строку InMemoryWebApiModule.forRoot(BackendService)
// 3) добавить код, который будет использовать fake backend по адресу /api/products 

@Injectable({
    providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let products = [
            { id: 1, name: "Product 1", description: "Product 1 description text", price: 1.4 },
            { id: 2, name: "Product 2", description: "Product 2 description text", price: 33.5 },
            { id: 3, name: "Product 3", description: "Product 3 description text", price: 40.9 },
            { id: 4, name: "Product 4", description: "Product 4 description text", price: 20.0 },
            { id: 5, name: "Product 5", description: "Product 5 description text", price: 100.5 },
        ];

        return { products }
    }
}
