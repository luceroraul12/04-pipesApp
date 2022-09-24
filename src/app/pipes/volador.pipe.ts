import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'volador',
})
export class VuelaPipe implements PipeTransform {
  transform(estadoVuela: boolean): string {
    return estadoVuela ? 'Puede volar' : 'No puede volar';
  }
}
