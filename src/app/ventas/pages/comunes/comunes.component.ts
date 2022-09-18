import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [],
})
export class ComunesComponent implements OnInit {
  public texto: string = 'tExto De PrVaCiendo.';

  public fecha: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
