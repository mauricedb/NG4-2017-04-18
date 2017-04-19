import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { BlaDirective } from './bla.directive';
import { FilterPipe } from './filter.pipe';
import { ValidateService } from './validate.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatComponent, BlaDirective, FilterPipe],
  exports: [CatComponent,
  BlaDirective
  ],
  providers:[ {provide:ValidateService, useFactory: () => {
    console.log('In factory')
    return new ValidateService();
  }} ]
})
export class CatsModule { }
