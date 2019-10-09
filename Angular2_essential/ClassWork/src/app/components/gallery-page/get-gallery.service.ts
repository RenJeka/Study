import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetGalleryService {

  constructor(private http:HttpClient) {  }

  getAllImages(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
  }

}
