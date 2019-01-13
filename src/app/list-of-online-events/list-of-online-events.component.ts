import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-list-of-online-events',
  templateUrl: './list-of-online-events.component.html',
  styleUrls: ['./list-of-online-events.component.css']
})
export class ListOfOnlineEventsComponent implements OnInit {

	isWebinarValue = true;
  constructor(private app: AppComponent) { }

  ngOnInit() {
  	this.app.isPressed = true;

  		(function($){
  $(function(){
    (<any>$('.parallax')).parallax();
  });
})(jQuery);
  	console.log(this.app.isPressed);
  }

  isWebinar(){
  	if(this.isWebinarValue==true){
  		this.isWebinarValue = false;
  	}
  	else{
  		this.isWebinarValue = true;
  	}

  	console.log(this.isWebinarValue);
  }

}
