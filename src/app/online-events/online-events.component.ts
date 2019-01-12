import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-online-events',
  templateUrl: './online-events.component.html',
  styleUrls: ['./online-events.component.css']
})
export class OnlineEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	(function($){
  $(function(){
    (<any>$('.parallax')).parallax();
  });
})(jQuery);


  }





}
