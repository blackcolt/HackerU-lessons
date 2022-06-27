import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies:Movie[];
  constructor() { 
    this.movies = [
      {
        isNew: false,
        name: "the rock",
        category: 'action',
        date: new Date('1995-12-17T03:24:00'),
        actors: [
          {
            name: 'sean connery',
            date: new Date('1930-12-17T03:24:00'),
            nickname: 'blabla'
          },
          {
            name: 'nicolas cage',
            date: new Date('1967-12-17T03:24:00'),
            nickname: 'nickcage'
          }
      ]
    },
    {
      isNew: false,
      name: "Titanic",
      category: 'drama',
      date: new Date('2004-12-17T03:24:00'),
      actors: [
        {
          name: 'lio de caprio',
          date: new Date('1982-12-17T03:24:00'),
          nickname: 'jack'
        },
        {
          name: 'another actor',
          date: new Date('1995-12-17T03:24:00'),
          nickname: 'rose'
        }
    ]
  },
  ]
  }
  getMovies(){
    return this.movies
  }
}
