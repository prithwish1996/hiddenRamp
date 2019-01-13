import { NgModule } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OnlineEventsComponent } from './online-events/online-events.component';
import { OfflineEventsComponent } from './offline-events/offline-events.component';
import { ListOfOnlineEventsComponent } from './list-of-online-events/list-of-online-events.component';
import { ListofflineeventsComponent } from './listofflineevents/listofflineevents.component';
import { UpComingEventsComponent } from './up-coming-events/up-coming-events.component';
import { ListOfUpcomingEventsComponent } from './list-of-upcoming-events/list-of-upcoming-events.component';
import { ViewTestimonialComponent } from './view-testimonial/view-testimonial.component';
import { ViewGuestSpeakersComponent } from './view-guest-speakers/view-guest-speakers.component';

const routes: Routes = [
	
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'onlineEvents', component: ListOfOnlineEventsComponent},
  { path: 'offlineEvents', component: ListofflineeventsComponent},
  { path: 'upcomingEvents', component: ListOfUpcomingEventsComponent},
  { path: 'viewTestimonial', component: ViewTestimonialComponent},
  { path: 'viewGuestSpeakers', component: ViewGuestSpeakersComponent}
  // {path: '404', component: ErrorPageComponent},
  // { path: '**', component: ErrorPageComponent }
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
