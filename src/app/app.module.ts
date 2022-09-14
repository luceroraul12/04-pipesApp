import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'primeng/api';

import { AppComponent } from './app.component';

//propios
import { PrimeNGModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNGModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
