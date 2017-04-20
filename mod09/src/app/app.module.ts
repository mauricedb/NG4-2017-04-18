import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { CatsModule } from './cats/cats.module';
// import { DogsModule } from './dogs/dogs.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'cats', loadChildren: './cats/cats.module#CatsModule'},
      { path:'dogs', loadChildren: './dogs/dogs.module#DogsModule'},
      // {
     
      // path:'**', redirectTo:'/dogs'
    ]),
    // CatsModule,
    // DogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
