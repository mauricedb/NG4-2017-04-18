import { Component, OnInit, Input, ViewEncapsulation, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import {CatComponent} from '../cat/cat.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
//   template: `
// <ul>
//   <li *ngFor="let cat of cats">
//     <app-cat [cat]="cat"></app-cat>
//   </li>
// </ul>
//   `,
  styleUrls: ['./cats.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CatsComponent implements OnInit, AfterViewInit {

  @ViewChildren(CatComponent) catComponets: QueryList<CatComponent>;

  @Input() cats;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // this.catComponets.
      console.log(this.catComponets)
  }

  printIt(e){
    console.log('I was clicked', e)
  }
}
