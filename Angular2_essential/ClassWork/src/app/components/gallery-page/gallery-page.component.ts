import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  gallery1
  
  // = [
  //   {
  //     title: 'Header1',
  //     content: 'Some text lorem 20'
  //   },
  //   {
  //     title: 'Header2',
  //     content: 'Some text lorem 40'
  //   },
  //   {
  //     title: 'Header3',
  //     content: 'Some text lorem 60'
  //   },
   
  // ];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=10').subscribe(
      (res) => {

          this.gallery1 = res;
          console.log(res);
        }
    );
  }

}
