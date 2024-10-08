import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(values: any[], search:string): any[] {
    if (search=='') return values;

    return values.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())
    || e.brand.toLowerCase()== search.toLowerCase()
  || e.price == Number(search));
  }

}
