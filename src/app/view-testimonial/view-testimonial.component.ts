import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-view-testimonial',
  templateUrl: './view-testimonial.component.html',
  styleUrls: ['./view-testimonial.component.css']
})
export class ViewTestimonialComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {
  	this.app.isPressed = true;
  }

}
