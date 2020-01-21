import { Pipe, PipeTransform } from '@angular/core';

// Creating custom pipe using Angular CLI

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()}!!!!`;
  }

}
