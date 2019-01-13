import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-guest-speaker',
  templateUrl: './guest-speaker.component.html',
  styleUrls: ['./guest-speaker.component.css']
})
export class GuestSpeakerComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {

  	(function($){
  $(function(){
    (<any>$('.parallax')).parallax();
  });
})(jQuery);
  }

}
