import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { Card } from 'babysitterCard/card.component';

@NgModule({
  declarations: [
    AppComponent,Card
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [Card]
})

export class AppModule { }
