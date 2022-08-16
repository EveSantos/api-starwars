import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchModule } from "../search/search.module";
import { SearchPeopleComponent } from "../search-people/search-people.component";
import { NavbarComponent } from "./navbar.component";
import { SearchPeopleModule } from "../search-people/search-people.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    SearchModule,
    ReactiveFormsModule,
    SearchPeopleModule,
    BrowserModule,
   ],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule { }
