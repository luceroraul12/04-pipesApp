import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  genero: string;
}

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  public personas: Persona[] = [
    { nombre: 'Franco', genero: 'm' },
    { nombre: 'Natkza', genero: 'f' },
    { nombre: 'Esteban', genero: 'm' },
    { nombre: 'Juan', genero: 'm' },
    { nombre: 'Ktya', genero: 'f' },
    { nombre: 'Kadorcha', genero: 'm' },
    { nombre: 'JOss2704', genero: 'm' },
  ];

  public map18Plural = {
    '0': 'sin personas cargadas',
    '1': 'única persona cargada',
    other: 'se tiene # personas cargadas',
  };

  public map18Select = {
    m: 'Bienvenido',
    f: 'Bienvenida',
  };

  eliminarUltimaPersona() {
    this.personas.pop();
  }
}
