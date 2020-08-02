import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(logins: string[], searchText: string): any[] {
    if (!logins) {
      return [];
    }
    if (!searchText) {
      return logins;
    }
    searchText = searchText.toLocaleLowerCase();

    return logins.filter(function(item){
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }

}
