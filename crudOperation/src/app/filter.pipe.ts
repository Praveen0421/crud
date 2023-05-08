import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue: any): any {
    return value.filter((search:any)=>{
    return search.name.toLowerCase().indexOf(searchValue.toLowerCase())>-1
    })
  }

}
