import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

  getMovies() {
    // return Observable.interval(1000)
    //   .switchMap(() => this.http
    //     .get('/api/movies')
    //     .map(rsp => rsp.json()));
  
    return this.http
        .get('/api/movies')
        .map(rsp => rsp.json())
        .toPromise();
}
}
