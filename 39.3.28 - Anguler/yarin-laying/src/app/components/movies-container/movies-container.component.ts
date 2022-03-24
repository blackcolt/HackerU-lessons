import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss']
})
export class MoviesContainerComponent {
  @Input() movies?: Movie[]
  constructor(private movieService: MoviesService) { 
    this.movies = movieService.getMovies()
  }
}
