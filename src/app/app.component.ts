import { Component } from '@angular/core';
import { People } from './models/people.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skywalker';

  people: string;
  id: number = 1;

  constructor(
    private service: ApiService
  ) { }

  ngOnInit() {
    this.service.getPeople(this.id).subscribe(data => {
      this.people = data.name;
    });
  }

  next(){
    this.id = this.id+1;
    this.service.getPeople(this.id).subscribe(data => {
      this.people = data.name;
    });
  }

  previous(){
    this.id = this.id-1;
    this.service.getPeople(this.id).subscribe(data => {
      this.people = data.name;
    });
  }

}
