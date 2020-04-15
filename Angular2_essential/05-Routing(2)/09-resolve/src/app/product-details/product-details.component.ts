import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: Product;
    id: number;
    saved: boolean = true;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ProductService) { }

    ngOnInit() {
        // resolvedProduct - инициализируется с помощью сервиса ProductDetailsResoveService, который указан
        // в настройках маршрутизации.
        // на свойстве activatedRoute обращаемся к свойству data, а не param как в прошлых примерах.
        // Данный компонент избавился от зависимости ProductService
        this.activatedRoute.data.forEach((data) => {
            this.product = data.resolvedProduct;
        });
    }

    save() {
        this.service.putProduct(this.product).subscribe(() => {
            this.saved = true;
            this.goToProductList();
        });

    }

    changed() {
        this.saved = false;
    }

    goToProductList() {
        this.router.navigate(["../"]);
    }

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
