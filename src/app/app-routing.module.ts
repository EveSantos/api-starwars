import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GetPeopleComponent } from './get-people/get-people.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'people/:id', component: GetPeopleComponent},
  { path: 'films', component: MovieCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
