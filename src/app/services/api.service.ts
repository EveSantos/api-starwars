import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';
import { take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // link da api
  apiURL : string = 'https://swapi.dev/api/people/1';
  peoples: People[];
  newApiUrl: string = 'https://swapi.dev/api/people'


  // id = this.apiURL.slice(29, 30); // 1
  // newApiUrl = this.apiURL.slice(0, 29); //ttps://swapi.dev/api/people/
  // numberId: number =+ this.id;

  constructor(private http : HttpClient) {}

  getPeople(numberId: number){
    return this.http.get<People>(`${this.newApiUrl}/${numberId}`);
  }


}
