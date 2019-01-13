import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-view-guest-speakers',
  templateUrl: './view-guest-speakers.component.html',
  styleUrls: ['./view-guest-speakers.component.css']
})
export class ViewGuestSpeakersComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {

  	this.app.isPressed = true;
  }

}
