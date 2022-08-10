import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PeopleComponent } from './people/people.component';
import { GetPeopleComponent } from './get-people/get-people.component';
import { NavbarModule } from "./navbar/navbar.component.module";

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    GetPeopleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
