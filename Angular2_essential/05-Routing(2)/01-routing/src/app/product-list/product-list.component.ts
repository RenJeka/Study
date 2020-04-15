import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];

    constructor(
        private router: Router,
        private phraseService: ProductService) { }

    ngOnInit() {
        this.phraseService   // обращаемся к сервису
            .getProducts()   // получаем Observable<Product[]> 
            .subscribe(result => this.products = result); // как только поток выдаст событие результат присваиваем свойству phrases
    }

    onSelect(selected: Product) {
        // При клике по элементу списка перенаправляем пользователя по адресу /product/id
        // адрес с обязательным параметром указан в настройках маршрутизации в файле app-routing.details.ts 
        this.router.navigate(["product", selected.id]);
    }

}
