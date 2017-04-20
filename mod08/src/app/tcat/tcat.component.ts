import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcat',
  templateUrl: './tcat.component.html',
  styleUrls: ['./tcat.component.css']
})
export class TcatComponent implements OnInit {

  cat = {
    name: 'Zorro'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
