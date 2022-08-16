import { Component, Input, OnInit } from '@angular/core';
import { People } from '../models/people.model';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.css']
})
export class SearchPeopleComponent implements OnInit {

  @Input() data: People;


  constructor() { }

  ngOnInit(): void {
  }

}
