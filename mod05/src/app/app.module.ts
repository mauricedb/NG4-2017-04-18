import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';

import { CatsModule } from './cats/cats.module'

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
