import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-up-coming-events',
  templateUrl: './up-coming-events.component.html',
  styleUrls: ['./up-coming-events.component.css']
})
export class UpComingEventsComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {

  	(function($){
  $(function(){
    (<any>$('.parallax')).parallax();
  });
})(jQuery);
  }

}
