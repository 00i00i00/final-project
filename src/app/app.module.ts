import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Api } from './services/api.service';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { FirstDateComponent } from './first-date/first-date.component';

//commented out for now, we can add this once it is going to be used. 
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  // { path: 'events', component: EventsComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'filter', component: FilterComponent},
  { path: 'firstdate', component: FirstDateComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    FavoritesComponent,
    FilterComponent,
    HomeComponent,
    FirstDateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule {}
