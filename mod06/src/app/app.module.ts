import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CatsModule } from './cats/cats.module';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
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
