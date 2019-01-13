import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {

  	(function($){
  $(function(){
    (<any>$('.parallax')).parallax();
  });
})(jQuery);

  }

}
