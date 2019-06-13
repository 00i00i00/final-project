import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Api } from './services/api.service';


import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { FavoritesComponent } from './favorites/favorites.component';

//commented out for now, we can add this once it is going to be used. 
const appRoutes: Routes =[
  { path: 'events', component: EventsComponent},
  { path: 'favorites', component: FavoritesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule {}
