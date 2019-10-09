import { Component, OnInit } from '@angular/core';
import { GetGalleryService } from './get-gallery.service';
import { FilterServiceService } from './filter-service.service';

export interface interfaceGallery{
  title:string;
  url: string;
}

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  gallery1:interfaceGallery[];
  search:string;
  allGallery:interfaceGallery[];
  
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

  constructor(

    private getService: GetGalleryService,
    private filterGalleryService: FilterServiceService
    ) { }

  ngOnInit() {

    this.getService.getAllImages().subscribe(
      (res:interfaceGallery[]) => {
        this.allGallery = res;
        this.gallery1 = res;
        console.log(res);
      }
    )

    /* this.http.get('https://jsonplaceholder.typicode.com/photos?_limit=10').subscribe(
      (res) => {

          this.gallery1 = res;
          console.log(res);
        }
    );*/
  }

  filterGalleryMethod(){
    this.gallery1 = this.filterGalleryService.returnFilterResult(this.search, this.allGallery)
    console.log(this.search);
  }

}
