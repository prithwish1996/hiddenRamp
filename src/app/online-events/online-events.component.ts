import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-online-events',
  templateUrl: './online-events.component.html',
  styleUrls: ['./online-events.component.css']
})
export class OnlineEventsComponent implements OnInit {

 


  constructor(private app: AppComponent) { }

  ngOnInit() {

  	(function($){
  $(function(){
    (<any>$('.parallax')).parallax();
  });
})(jQuery);




  }

  







}
