import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [],
})
export class NumerosComponent implements OnInit {
  public ventasNetas: number = 23973245.343;
  public porcentaje: number = 0.045;

  constructor() {}

  ngOnInit(): void {}
}
