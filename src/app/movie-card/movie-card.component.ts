import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MovieCardService } from './movie-card.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  films: any;

  constructor(private cardservice: MovieCardService) { }

  ngOnInit(): void {
    this.cardservice.getFilms().subscribe(data => {
      this.films = data.results
      console.log(this.films)
    });

  }

}
