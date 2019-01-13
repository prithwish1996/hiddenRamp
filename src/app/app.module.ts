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
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
