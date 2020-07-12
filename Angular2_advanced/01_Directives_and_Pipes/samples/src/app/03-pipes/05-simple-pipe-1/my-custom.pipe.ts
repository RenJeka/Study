import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "myCustom"
})
export class MyCustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return "[" + value + "]";
    }
    else {
      return "";
    }
  }

}
