import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

import { map } from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailsResolveService implements Resolve<Product> {

    constructor(private service: ProductService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {

        let id = +route.params["id"];

        return this.service.getProduct(id).pipe(
            map(product => {
                if (product) {
                    return product;
                } else { // не удалось найти продукт по id
                    this.router.navigate(["/product-list"]);
                    return null;
                }
            }));
        }
    }
