import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats/cats.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
       {path:'', component: CatsComponent, children:[
         {path:'**', component: CatsComponent}
       ]}
    ])
  ],
  declarations: [CatsComponent]
})
export class CatsModule { }
