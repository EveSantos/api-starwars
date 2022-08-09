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

  constructor( private service: ApiService ) { }

  ngOnInit() {

    this.service.getNext(this.next).subscribe(data => {
      this.peoples = data.results
      this.next = data.next
    })
  }

  nextPage(){
    this.service.getNext(this.next).subscribe(data => {
      this.peoples = data.results;
      this.previous = data.previous;
      this.next = data.next;
    })
  }

  previousPage(){
    this.service.getNext(this.previous).subscribe(data => {
      this.peoples = data.results;
      this.previous = data.previous;
      this.next = data.next;
    })
  }


}
