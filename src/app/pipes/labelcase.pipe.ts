import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelcase'
})
export class LabelcasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // let input = value.split(' ');
    return value
          .split(' ')
          .map(function(w) {
            return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
          })  
          .join(' ');
  }

}
