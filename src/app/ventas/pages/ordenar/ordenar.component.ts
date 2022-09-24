import { Component, OnInit } from '@angular/core';
import { Color, heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  listaDeHeroes: heroe[] = [
    {
      nombre: 'Capitan América',
      vuela: false,
      color: Color.ROJO,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.VERDE,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.NEGRO,
    },
    {
      nombre: 'Pikachú',
      vuela: false,
      color: Color.AMARILLO,
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.ROJO,
    },
  ];

  tipoOrdenamiento: string = 'default';

  constructor() {}

  ngOnInit(): void {}
}
