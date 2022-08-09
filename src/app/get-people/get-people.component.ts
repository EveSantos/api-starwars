import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../models/people.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-get-people',
  templateUrl: './get-people.component.html',
  styleUrls: ['./get-people.component.css']
})
export class GetPeopleComponent implements OnInit {

  id: number;
  people: People;

  constructor(private route: ActivatedRoute, private service: ApiService) {
    console.log(this.route)
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any)=>{
      this.id = params['id'];
    });
  }

}
