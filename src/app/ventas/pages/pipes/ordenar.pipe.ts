import { Pipe, PipeTransform } from '@angular/core';
import { heroe } from '../../interfaces/heroes.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: heroe[], orden: string = 'default'): heroe[] {
    if (orden == 'default') {
      return heroes;
    } else if (orden == 'nombre') {
      return heroes.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if ('vuelo') {
      return heroes.sort((a, b) => Number(b.vuela) - Number(a.vuela));
    } else {
      return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
    }
  }
}
