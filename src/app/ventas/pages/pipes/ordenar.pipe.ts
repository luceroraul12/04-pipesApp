import { Pipe, PipeTransform } from '@angular/core';
import { heroe } from '../../interfaces/heroes.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: heroe[]): heroe[] {
    return heroes.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}
