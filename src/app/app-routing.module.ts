import { NgModule } from '@angular/core';
import {  RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OnlineEventsComponent } from './online-events/online-events.component';
import { OfflineEventsComponent } from './offline-events/offline-events.component';
import { ListOfOnlineEventsComponent } from './list-of-online-events/list-of-online-events.component';

const routes: Routes = [
	
  
  { path: 'onlineEvents', component: ListOfOnlineEventsComponent}
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
