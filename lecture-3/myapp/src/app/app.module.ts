import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CountryComponent } from './country/country.component';
import { IndiaUsaComponent } from './india-usa/india-usa.component';
import { PacificComponent } from './pacific/pacific.component';
import { AtlanticComponent } from './atlantic/atlantic.component';
import { MealComponent } from './meal/meal.component';

const routes: Routes = [
  {path: '', redirectTo: 'india-usa', pathMatch: 'full' },
  {path: 'country', component: CountryComponent},
  {path: 'india-usa', component: IndiaUsaComponent, children: [
    {path: 'atlantic', component: AtlanticComponent},
    {path: 'atlantic/:id', component: MealComponent},
    {path: 'pacific', component: PacificComponent},
    {path: 'pacific/:id', component: MealComponent}
  ] },

];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CountryComponent,
    IndiaUsaComponent,
    PacificComponent,
    AtlanticComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
