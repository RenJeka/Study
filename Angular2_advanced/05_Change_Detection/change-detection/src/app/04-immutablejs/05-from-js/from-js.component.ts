import { Component, OnInit } from '@angular/core';
import { Map, fromJS } from "immutable";

@Component({
  selector: 'app-from-js',
  templateUrl: './from-js.component.html',
  styleUrls: ['./from-js.component.css']
})
export class FromJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let video = {
      id: 100,
      name: "Angular CLI",
      address: {
        host: "https://itvdn.com",
        url: "https://itvdn.com/ru/video/angular_cli"
      }
    }

    // Метод Map не обрабатывает вложенные объекты. Вложенный объект остаётся mutable
    let map1 = Map<string, any>(video);

    map1.get("address").host = "----";

    console.log(map1.get("address").host);

    // Метод fromJS делает immutable все вложенные объекты
    let map2 = fromJS(video);
    let map3 = map2.setIn(["address", "url"], "----");

    console.log(map2.get("address").get("url"));
    console.log(map3.get("address").get("url"));
  }

}



