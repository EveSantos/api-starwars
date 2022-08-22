import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchModule } from "../search/search.module";
import { NavbarComponent } from "./navbar.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    SearchModule,
    ReactiveFormsModule,
    BrowserModule,
   ],
  exports: [
    NavbarComponent
  ]
})

export class NavbarModule { }
