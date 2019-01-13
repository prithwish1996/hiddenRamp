import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-list-of-upcoming-events',
  templateUrl: './list-of-upcoming-events.component.html',
  styleUrls: ['./list-of-upcoming-events.component.css']
})
export class ListOfUpcomingEventsComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {

  	this.app.isPressed = true;
  }

}
