import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { FieldsetModule } from 'primeng/fieldset';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    RippleModule,
    TableModule,
    ToolbarModule,
  ],
})
export class PrimeNGModule {}
