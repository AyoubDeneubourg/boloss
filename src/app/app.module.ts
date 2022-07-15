import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbdssamadComponent } from './abdssamad/abdssamad.component';
import { SalahComponent } from './salah/salah.component';

@NgModule({
  declarations: [
    AppComponent,
    AbdssamadComponent,
    SalahComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
