import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchComponent } from "./search.component";

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule
   ],
  exports: [
    SearchComponent
  ]
})

export class SearchModule { }
