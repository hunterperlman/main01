import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {
  
  // compares date to present to get difference
  transform(value: unknown, ...args: unknown[]): unknown 
  {
    return moment(value).fromNow();
  }

}
