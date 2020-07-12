import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "purePipe",
  pure: true // данный фильтр будет срабатывать только если будет изменено входное значение - изменено примитивное значение (string, number ...) или
  // изменена ссылка на объект (Date, Array, Function ...);
})
export class MyPurePipe implements PipeTransform {

  transform(value: any) {
    return value.firstName + " " + value.lastName;
  }

}

@Pipe({
  name: "impurePipe",
  pure: false // данный фильтр будет срабатывать при каждой проверке изменений
})
export class MyImpurePipe implements PipeTransform {
  transform(value: any) {
      return value.firstName + " " + value.lastName;
  }
}
