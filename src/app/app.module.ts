import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OnlineEventsComponent } from './online-events/online-events.component';
import { OfflineEventsComponent } from './offline-events/offline-events.component';

import { ListOfOnlineEventsComponent } from './list-of-online-events/list-of-online-events.component';

import { ListofflineeventsComponent } from './listofflineevents/listofflineevents.component';

import { ParticlesModule } from 'angular-particle';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { UpComingEventsComponent } from './up-coming-events/up-coming-events.component';
import { ListOfUpcomingEventsComponent } from './list-of-upcoming-events/list-of-upcoming-events.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ViewTestimonialComponent } from './view-testimonial/view-testimonial.component';
import { GuestSpeakerComponent } from './guest-speaker/guest-speaker.component';
import { ViewGuestSpeakersComponent } from './view-guest-speakers/view-guest-speakers.component';



// import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OnlineEventsComponent,
    OfflineEventsComponent,

    ListOfOnlineEventsComponent,

    ListofflineeventsComponent,

    UpComingEventsComponent,

    ListOfUpcomingEventsComponent,

    TestimonialComponent,

    ViewTestimonialComponent,

    GuestSpeakerComponent,

    ViewGuestSpeakersComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    NgxSpinnerModule,
    Ng4LoadingSpinnerModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
