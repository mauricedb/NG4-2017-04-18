import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats.service'

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {

private  catName = 'Zorro';

  cats = []

  now = new Date()

  constructor(private cs: CatsService) { }

  ngOnInit() {
    this.cats = this.cs.getCats()
  }

  hello(){
    alert('hello')
  }

}
