import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, CardModule],
})
export class PrimeNGModule {}
