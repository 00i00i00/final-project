import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'convertFrom24To12Format'})
export class TimeFormat implements PipeTransform {
     transform(time: any): any {
         let hour = time.split('').splice(0,2).join('').toString();
        let min = time.split('').splice(2,4).join('').toString();
         let part = hour > 12 ? 'pm' : 'am';
        //  console.log(time, hour, min);
         hour = hour > 12 ? hour - 12 : hour;
         return `${hour}:${min} ${part}`
       }
   }