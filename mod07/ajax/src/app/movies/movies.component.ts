import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'
import {Subscription } from 'rxjs/Subscription'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[];
  subscription: Subscription;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    // this.subscription =  this.moviesService
    //   .getMovies()
      // .subscribe(movies => this.movies = movies);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
