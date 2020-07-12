import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passing-data',
  templateUrl: './passing-data.component.html'
})
export class PassingDataComponent implements OnInit {

  currentColor = "";
  
  ngOnInit(): void {
    this.currentColor = "green";
  }

}
