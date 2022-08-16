import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.css']
})
export class ChronologyComponent implements OnInit {

  film1: boolean = false
  film2: boolean = false
  film3: boolean = false
  film4: boolean = false
  film5: boolean = false
  film6: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
