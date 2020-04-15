import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    selectedId: number;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private phraseService: ProductService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params["id"];
            
            this.phraseService   // обращаемся к сервису
                .getProducts()   // получаем Observable<Product[]> 
                .subscribe(result => this.products = result); // как только поток выдаст событие результат присваиваем свойству phrases
        });
    }

    onSelect(selected: Product) {
        // При клике по элементу списка перенаправляем пользователя по адресу /product/id
        // адрес с обязательным параметром указан в настройках маршрутизации в файле app-routing.module.ts 
        this.router.navigate(["product", selected.id]);
    }

    isSelected(product: Product) {
        return product.id == this.selectedId;
    }

}
