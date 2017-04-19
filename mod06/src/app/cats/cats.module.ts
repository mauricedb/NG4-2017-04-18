import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats/cats.component';
import { CatComponent } from './cat/cat.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CatsComponent
  ],
  declarations: [
    CatsComponent, 
    CatComponent
  ]
})
export class CatsModule { }
