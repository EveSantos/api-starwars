import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { People } from '../models/people.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  peoples: People[];
  searchform: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private service: ApiService
    ) { }

  ngOnInit(): void {
    this.searchform = this.formbuilder.group({
      search:['']
    })
  }

  search(){
    this.service.getSearch(this.searchform.get('search')?.value).subscribe((data: any) => {
      this.peoples = data.results;
      console.log(data.results);
    })
  }


}
