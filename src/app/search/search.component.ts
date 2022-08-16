import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { People } from '../models/people.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nome: People[];
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
      this.nome = data.results;
      console.log(data.results);
    })
  }

}
