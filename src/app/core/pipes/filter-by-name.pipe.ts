import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(inputArray: any, filterValue: string): any {
    if (filterValue === '') {
      return inputArray;
    } else {
      return inputArray.filter((e) =>
        e.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  }
}
