import { Injectable } from '@angular/core';
import { interfaceGallery } from './gallery-page.component';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  constructor() { }

  returnFilterResult(strSearch: string, array:interfaceGallery[]){
    return array.filter(item => item.title.includes(strSearch.trim().toLocaleLowerCase()))
  }

}
