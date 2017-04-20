import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'', component: DogsComponent}
    ])
  ],
  declarations: [DogsComponent]
})
export class DogsModule { }
