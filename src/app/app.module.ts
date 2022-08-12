import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PeopleComponent } from './people/people.component';
import { GetPeopleComponent } from './get-people/get-people.component';
import { NavbarModule } from "./navbar/navbar.component.module";
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from "./footer/footer.component.module";
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SecundaryContentComponent } from './secundary-content/secundary-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    GetPeopleComponent,
    HomePageComponent,
    MovieCardComponent,
    SecundaryContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
