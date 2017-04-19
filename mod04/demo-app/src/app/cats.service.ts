import { Injectable } from '@angular/core';

@Injectable()
export class CatsService {

  constructor() { }

  getCats(){

    return [
    {
        catName: 'Zorro'
    },
    {
        catName: 'Diego'
    },
    {
        catName: 'Sara'
    }
  ]
  }

}
