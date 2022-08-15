import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secundary-content',
  templateUrl: './secundary-content.component.html',
  styleUrls: ['./secundary-content.component.css']
})
export class SecundaryContentComponent implements OnInit {

  luke: boolean =  true;
  vader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isShowVader(){
    this.luke = false;
    this.vader = true
  }

  isShowLuke(){
    this.luke = true;
    this.vader = false
  }
}
