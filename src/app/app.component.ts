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

  people: People;

  constructor(
    private service: ApiService
  ) { }

  ngOnInit() {
    this.service.listOne().subscribe(data => {
      this.people = data.name;
    });
  }
}
