import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films.model';
import { ApiService } from '../services/api.service';
import { MovieCardService } from './movie-card.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  films: Film[];
  img: any[] = ['sw-4.jpeg','sw-5.jpeg','sw-6.jpeg','sw-1.jpeg','sw-2.jpeg','sw-3.jpeg'];

  constructor(private cardservice: MovieCardService) { }

  ngOnInit(): void {
    this.cardservice.getFilms().subscribe(data => {
      this.films = data.results
      console.log( "url imagens " + this.img[0])
    });

  }

}
