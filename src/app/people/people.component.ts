import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../models/people.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  title = 'skywalker';

  peoples: any;
  id: number = 1;
  next: string = '//swapi.dev/api/people/?page=1';
  previous: string;
  peoplesId: any[] = [];

  constructor( private service: ApiService ) { }

  ngOnInit() {

    this.service.getNext(this.next).subscribe(data => {
      this.peoples = data.results;
      this.next = data.next
      this.peoples.forEach( (people: any) => {
        var idUrl = people.url.split('/')[5];
        idUrl = parseInt(idUrl);
        this.peoplesId.push(idUrl);
      });
    })
  }

  nextPage(){
    this.service.getNext(this.next).subscribe(data => {
      this.peoplesId = [];
      this.peoples = data.results;
      this.previous = data.previous;
      this.next = data.next;
      this.peoples.forEach( (people: any) => {
        var idUrl = people.url.split('/')[5];
        idUrl = parseInt(idUrl);
        this.peoplesId.push(idUrl);
      });
    })
  }

  previousPage(){
    this.service.getNext(this.previous).subscribe(data => {
      this.peoples = data.results;
      this.previous = data.previous;
      this.next = data.next;
      this.peoplesId = [];
      this.peoples.forEach( (people: any) => {
        var idUrl = people.url.split('/')[5];
        idUrl = parseInt(idUrl);
        this.peoplesId.push(idUrl);
      });
    })
  }


}
