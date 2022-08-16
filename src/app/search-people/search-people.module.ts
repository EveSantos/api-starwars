import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchPeopleComponent } from "./search-people.component";

@NgModule({
  declarations: [
    SearchPeopleComponent
  ],
  imports: [
    ReactiveFormsModule
   ],
  exports: [
    SearchPeopleComponent
  ]
})

export class SearchPeopleModule { }
