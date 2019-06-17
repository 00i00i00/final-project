import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Api } from './services/api.service';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LastDateComponent } from './last-date/last-date.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { OneOAKComponent } from './one-oak/one-oak.component';
import { HomeComponent } from './home/home.component';
import { AdventureComponent } from './adventure/adventure.component';
import { RomanticComponent } from './romantic/romantic.component';
import { FirstDateComponent } from './first-date/first-date.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'last-date', component: LastDateComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'one-oak', component: OneOAKComponent},
  { path: 'adventure', component: AdventureComponent },
  { path: 'romantic', component: RomanticComponent},
  { path: 'first-date', component: FirstDateComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LastDateComponent,
    FavoritesComponent,
    OneOAKComponent,
    HomeComponent,
    AdventureComponent,
    RomanticComponent,
    FirstDateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule {}
