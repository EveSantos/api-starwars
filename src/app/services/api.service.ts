import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';
import { take, tap } from 'rxjs/operators'
import { Planet } from '../models/planet.model';
import { Film } from '../models/films.model';
import { Species } from '../models/species.model';
import { Vehicles } from '../models/vehicles';
import { Starships } from '../models/starships';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getAllPeople() {
    throw new Error('Method not implemented.');
  }
  people: People[];
  planets: Planet[];
  films: Film[];
  species: Species[];
  vehicles: Vehicles[];
  starships: Starships[];
  apiURL : string = 'https://swapi.dev/api';
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

  getSearch(option: string, nome: string){
    return this.http.get<any>(`${this.apiURL}/${option}/?search=${nome}`);
  }

  getAllSpecies(){
    return this.http.get<Species[]>(`${this.apiURL}/species`);
  }

  getAllPlanets(){
    return this.http.get<Planet[]>(`${this.apiURL}/planets`);
  }

  getAllVehicles(){
    return this.http.get<Vehicles[]>(`${this.apiURL}/vehicles`);
  }

  getAllStarships(){
    return this.http.get<Starships[]>(`${this.apiURL}/starships`);
  }


}
