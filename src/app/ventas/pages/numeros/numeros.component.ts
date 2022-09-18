import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [],
})
export class NumerosComponent implements OnInit {
  public ventasNetas: number = 23984732694873245.34345;
  public porcentaje: number = 0.045;

  constructor() {}

  ngOnInit(): void {}
}
