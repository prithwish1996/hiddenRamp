import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-offline-events',
  templateUrl: './offline-events.component.html',
  styleUrls: ['./offline-events.component.css']
})
export class OfflineEventsComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {

    
  	(function($){
  $(function(){
    (<any>$('.parallax')).parallax();
  });
})(jQuery);
  }

}
