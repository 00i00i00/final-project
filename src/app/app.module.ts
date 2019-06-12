// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
// import { ticketsComponent } from './ticketsList/ticketList.component';
// import { Api } from './services/api.service';

// // const appRoutes: Routes = [
// //   {path: '', component: ticketsComponent },
// // ];
// @NgModule({
//   declarations: [
//     AppComponent,
//     ticketsComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     // RouterModule.forRoot(appRoutes)
//   ],
//   providers: [Api],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Api } from './services/api.service';
import { EventsComponent } from './events/events.component';
import { TicketsComponent } from './ticketList/ticketList.component';


// commented out for now, we can add this once it is going to be used. 
const appRoutes: Routes =[
  { path: 'events', component: EventsComponent},
  { path: 'ticketList', component: TicketsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    TicketsComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)

  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
