import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent implements OnInit {

  @Input() person;

  constructor() { }

  ngOnInit() {
  }

  oops(e) {
    console.log(e)
    return Math.random()
  }
}
