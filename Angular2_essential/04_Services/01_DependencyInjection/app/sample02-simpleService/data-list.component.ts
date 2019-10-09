import { Component, OnInit } from "@angular/core";

import { DataService, Service2 } from "./index";

@Component({
    moduleId: module.id,
    selector: "data-list",
    templateUrl: "data-list.component.html"
})
export class DataListComponent implements OnInit {
    public itemsSource: string[];
    public myVariable: any;

    // private dataService: DataService внедрение зависимости через конструктор
    constructor(private dataService: DataService, private service2: Service2) {
    }

    ngOnInit() {
        this.itemsSource = this.dataService.getData();
        this.myVariable = this.service2.someMethod();
        
    }
}