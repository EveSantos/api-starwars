import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from 'rxjs';
import { ApiService } from "../services/api.service";

@Injectable({
  providedIn: 'root'
})

export class MovieCardService {

  url: string = this.service.apiURL;

  constructor(
    private http: HttpClient,
    private service: ApiService ){
  }

  getFilms(){
    return this.http.get(`${this.url}/films`).pipe(
      tap(console.log)
    )
  }

}
