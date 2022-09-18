import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-dollar',
            routerLink: 'comunes',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-percentage',
            routerLink: 'numeros',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-exclamation-circle',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
      },
    ];
  }
}
