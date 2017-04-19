import { Pipe, PipeTransform } from '@angular/core';
import {ValidateService} from './validate.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

constructor(s: ValidateService){

}
  transform(value: any, args?: any): any {
    let o = {x:1, y:3};
    // o.x= 2;
     o = Object.assign({}, o, {x:2})

    return value;
  }

}
