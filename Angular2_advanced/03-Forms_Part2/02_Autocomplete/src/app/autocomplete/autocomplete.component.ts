import { Component, OnInit, Input, ElementRef } from '@angular/core';

declare let jQuery;

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  // Для использование jQuery UI необходиом установить
  // npm install jquery --save
  // npm install jquery-ui-dist --save

  // В файле .angular-cli.json добавьте следующие значения в массив scripts и styles
  // "styles": [
  //       "styles.css",
  //       "../node_modules/jquery-ui-dist/jquery-ui.min.css"
  //     ]

  // "scripts": [
  //       "../node_modules/jquery/dist/jquery.min.js",
  //       "../node_modules/jquery-ui-dist/jquery-ui.min.js"
  //     ]

  @Input()
  set source(value: string[]) {
    let jqObj = jQuery(this.element).autocomplete({
      source: value || []
    });
  }

  private element: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.element = this.elementRef.nativeElement.querySelector("#autocomplete-field");
  }

}
