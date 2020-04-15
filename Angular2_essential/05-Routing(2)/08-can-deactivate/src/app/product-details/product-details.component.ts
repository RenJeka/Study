import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { CanComponentDeactivate } from '../shared/can-deactivate-guard.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, CanComponentDeactivate {

    product: Product;
    id: number;
    saved: boolean = true;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ProductService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.id = +params["id"];
            this.service
                .getProduct(this.id)
                .subscribe(result => {
                    this.product = result;
                });
        });
    }

    save() {
        this.service.putProduct(this.product).subscribe(() => {
            this.saved = true;
            this.goToProductList();
        });
    }

    changed () {
        this.saved = false;
    }

    goToProductList() {
        this.router.navigate(["../"]);
    }

    // метод для проверки возможности перенаправления пользователя на другой маршрут
    // если метод возвращает true перенаправление возможно
    // если метод вернет false пользователь получит уведомление с просьбой подтвердить переход
    // Данный метод будет использоваться при работе с CanDeactivateGuard (shared/can-deactivate-guard.service.ts)
    canDeactivate(): Promise<boolean> | boolean {
        if (!this.product) {
            return true;
        }

        if (this.saved) {
            return true;
        }
        else {
            return confirm("Your changes will be lost if you don't save them.");
        }
    }
}
