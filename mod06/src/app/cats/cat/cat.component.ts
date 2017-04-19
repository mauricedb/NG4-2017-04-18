import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Input() cat;
  @Output() iWasClicked = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  clicked() {
  
    this.iWasClicked.emit({x:1})
  }

    log() {
    console.log('')
    return '';
  }

}
