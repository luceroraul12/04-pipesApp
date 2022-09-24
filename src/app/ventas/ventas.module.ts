import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { VuelaPipe } from './pages/pipes/volador.pipe';
import { OrdenarPipe } from './pages/pipes/ordenar.pipe';

@NgModule({
  declarations: [
    NumerosComponent,
    ComunesComponent,
    NoComunesComponent,
    OrdenarComponent,
    VuelaPipe,
    OrdenarPipe,
  ],
  imports: [CommonModule, PrimeNGModule],
  exports: [
    NumerosComponent,
    ComunesComponent,
    NoComunesComponent,
    OrdenarComponent,
  ],
})
export class VentasModule {}
