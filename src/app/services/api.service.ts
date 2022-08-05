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
  readonly apiURL : string = 'https://swapi.dev/api/people/1';

  peoples: People[];

  constructor(private http : HttpClient) {}

  listOne(){
    return this.http.get<People>(this.apiURL).pipe(
      tap(console.log)
    );
  }


}
