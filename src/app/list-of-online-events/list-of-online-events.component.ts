import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-list-of-online-events',
  templateUrl: './list-of-online-events.component.html',
  styleUrls: ['./list-of-online-events.component.css']
})
export class ListOfOnlineEventsComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
  	this.app.isPressed = true;
  	console.log(this.app.isPressed);
  }

}
