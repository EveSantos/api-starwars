import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GetPeopleComponent } from './get-people/get-people.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent},
  { path: 'people/:id', component: GetPeopleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
