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

    // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ProductService) { }

    ngOnInit() {
        // params - параметры текущего маршрута. Данное свойство является Observable объектом
        // Если параметры будут изменены - произойдет событие и компонент узнает о изменениях.

        // OBSERVABLE PARAMS
        // forEach - устанавливаем обработчик на каждое изменение params
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            this.service
                .getProduct(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Observable<Product>
                .subscribe(result => this.product = result);  // как только получаем событие от потока присваиваем его значение свойству phrase
        });
    }

    goToProductList() {
        let pId = this.product ? this.product.id : null
        // Объект в массиве с сегментами пути расценивается как опциональные параметры
        // В адресной строке опциональные параметры будут разделены точкой с запятой
        this.router.navigate(["/products",  { id: pId, param1: "test", param2: 123 }]);
    }
}
