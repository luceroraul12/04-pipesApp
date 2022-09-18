import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';



@NgModule({
  declarations: [
    NumerosComponent,
    ComunesComponent,
    NoComunesComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
