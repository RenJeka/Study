import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Product } from './product';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get(environment.apiUrl + "products")
            .pipe(
                map(response => {
                    let value = response as Product[];
                    let result: Product[] = [];
                    value.forEach(element => {
                        result.push(new Product(element.id, element.name, element.price));
                    });
                    return result;
                })
            );
    }

    getProduct(productId): Observable<Product> {
        return this.http.get(`${environment.apiUrl + "products"}/${productId}`)
            .pipe(
                map(response => {
                    let value = response as Product;
                    return new Product(value.id, value.name, value.price)
                })
            );
    }

}
