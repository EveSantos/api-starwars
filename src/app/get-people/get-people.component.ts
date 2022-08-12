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

  constructor(private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any)=>{
      this.id = params['id'];
      this.service.getPeople(this.id).subscribe(data => {
        this.people = data
      })
    });
  }

}
