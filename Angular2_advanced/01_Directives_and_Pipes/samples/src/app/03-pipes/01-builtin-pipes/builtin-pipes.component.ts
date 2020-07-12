import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-builtin-pipes",
  templateUrl: "./builtin-pipes.component.html"
})
export class BuiltinPipesComponent implements OnInit {

  products: any[];

  ngOnInit() {
    this.products = [
      { name: "Item 1", price: 100, category: "Category 1", code: "aa21c", date: new Date(2016, 9, 1) },
      { name: "Item 2", price: 45, category: "Category 1", code: "bc21c", date: new Date(2016, 10, 3) },
      { name: "Item 3", price: 65.4, category: "Category 2", code: "rr57a", date: new Date(2016, 10, 5) },
      { name: "Item 4", price: 11.8, category: "Category 2", code: "dr413", date: new Date(2016, 9, 10) }];
  }
}
