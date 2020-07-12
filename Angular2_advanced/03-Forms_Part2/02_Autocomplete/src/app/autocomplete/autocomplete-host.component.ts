import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-host',
  templateUrl: './autocomplete-host.component.html',
  styleUrls: ['./autocomplete-host.component.css']
})
export class AutocompleteHostComponent implements OnInit {

  public data: string[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.data = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
    }, 3000);
  }

}
