import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';
import { take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL : string = 'https://swapi.dev/api/people/1';
  peoples: People[];
  newApiUrl: string = 'https://swapi.dev/api/people'


  constructor(private http : HttpClient) {}

  getPeople(numberId: number){
    return this.http.get<People>(`${this.newApiUrl}/${numberId}`);
  }

  getAll(){
    return this.http.get<any>(`${this.newApiUrl}`);
  }

  getNext(next: string){
    return this.http.get<any>(`${next}`);
  }

  getPrevious(previous: string){
    return this.http.get(`${previous}`)
  }

}
