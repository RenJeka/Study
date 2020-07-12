import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-http-sample',
  templateUrl: './http-sample.component.html',
  styleUrls: ["./http-sample.component.css"]
})
export class HttpSampleComponent {

  posts: string[] = [];

  constructor(private http: Http) { }

  download() {
    this.posts = [];
    
    this.http.get("http://jsonplaceholder.typicode.com/posts/")
      .flatMap((response) => response.json())
      .filter<any>((post) => post.userId == 5)
      .map((post) => post.body)
      .subscribe((post) => { this.posts.push(post); });
  }
}
