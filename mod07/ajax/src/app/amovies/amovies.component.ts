import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-amovies',
  templateUrl: './amovies.component.html',
  styleUrls: ['./amovies.component.css']
})
export class AmoviesComponent implements OnInit {
  movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies =  this.moviesService.getMovies()
  }

}
