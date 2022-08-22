import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Film } from '../models/films.model';
import { People } from '../models/people.model';
import { Planet } from '../models/planet.model';
import { Species } from '../models/species.model';
import { Starships } from '../models/starships';
import { Vehicles } from '../models/vehicles';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dataId: any[] = [];
  searchform: FormGroup;
  previous: string;
  next: string;
  datasSearch: any;
  selectedOption = '';
  valueoption: any;

  constructor(private formbuilder: FormBuilder,
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.service.getAllPlanets().subscribe(data => {
    })
    this.searchform = this.formbuilder.group({
      search: ['']
    })
  }

  search() {
    if (this.valueoption == undefined) {
      this.valueoption = 'people';
    }
    var nome = this.searchform.get('search')?.value;
    this.service.getSearch(this.valueoption, nome).subscribe((data: any) => {
      this.datasSearch = data.results;
      this.next = data.next;
      data.results.forEach((dataSearch: any) => {
        var dataId = dataSearch.url.split('/')[5];
        dataId = parseInt(dataId);
        this.dataId.push(dataId);
      })
      if(data.next != undefined) {
        console.log(data.next)
      }
    })
  }

  onSelected(valueopt: string): string {
    this.valueoption = valueopt;
    return this.valueoption;
  }

  nextPage(){
    this.service.getNext(this.next).subscribe(data => {
      this.dataId = [];
      this.datasSearch = data.results;
      this.previous = data.previous;
      this.next = data.next;
      this.datasSearch.forEach( (people: any) => {
        var idUrl = people.url.split('/')[5];
        idUrl = parseInt(idUrl);
        this.dataId.push(idUrl);
      });
    })
  }

  previousPage(){
    this.service.getNext(this.previous).subscribe(data => {
      this.datasSearch = data.results;
      this.previous = data.previous;
      this.next = data.next;
      this.dataId = [];
      this.datasSearch.forEach( (people: any) => {
        var idUrl = people.url.split('/')[5];
        idUrl = parseInt(idUrl);
        this.dataId.push(idUrl);
      });
    })
  }

}
