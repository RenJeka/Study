import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatDistance"
})
export class FormatDistancePipe implements PipeTransform {

  transform(sizeInMeters: number, metric: boolean): string {
    
    let formatedSize = 0;
    let unit = "";

    if (metric) {
      formatedSize = sizeInMeters / 1000;
      unit = "km";
    }
    else {
      formatedSize = sizeInMeters / 1609.344;
      unit = "mi"
    }

    formatedSize = Math.round(formatedSize * 100) / 100;
    return formatedSize ? `${formatedSize} ${unit}` : "";
  }

}
