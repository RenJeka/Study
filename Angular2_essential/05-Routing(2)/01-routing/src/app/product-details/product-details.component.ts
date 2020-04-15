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
        console.log(this.activatedRoute);
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            console.log(params);
            this.service
                .getProduct(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Observable<Product>
                .subscribe(result => this.product = result);  // как только получаем событие от потока присваиваем его значение свойству phrase
        });

        // SNAPSHOT
        // получение начального значения параметра id 
        /*let id = +this.activatedRoute.snapshot.params["id"];
        this.service
            .getProduct(id)  
            .subscribe(result => this.phrase = result); */ 
    }

    goToProductList() {
        this.router.navigate(["products"]); // перенаправляем пользователя на ProductListComponent
    }
}
