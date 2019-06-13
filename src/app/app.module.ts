import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Api } from './services/api.service';
import { EventsComponent } from './events/events.component';

//commented out for now, we can add this once it is going to be used. 
const appRoutes: Routes =[
  { path: 'events', component: EventsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
