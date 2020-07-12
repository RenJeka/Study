import { Component, OnInit } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'app-immutable-map',
  templateUrl: './immutable-map.component.html',
  styleUrls: ['./immutable-map.component.css']
})
export class ImmutableMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Создаем immutable объект
    let video1 = Map<string, any>({
      id: 100,
      name: "Angular Advanced"
    });

    // изменить значения свойства можно с помощью метода set при этом метод возвращает новый измененный объект, исходных объект не меняется
    let video2 = video1.set("name", "Angular Essential");

    // изменение нескольких свойств с помощью метода merge
    let video3 = video1.merge({
      id: 102,
      name: "Angular CLI"
    });

    // для получения значения из immutable объекта используется метод get
    console.log("video1.name " + video1.get("name")); // output Angular Advanced
    console.log("video2.name " + video2.get("name")); // output Angular Essential
    console.log("video3.name " + video3.get("name")); // output Angular CLI
  }

}
