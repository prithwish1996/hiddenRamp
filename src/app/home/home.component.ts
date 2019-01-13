import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {AppComponent} from '../app.component';
import { Event, Router, NavigationStart, NavigationEnd} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    // isLoading = false;
    template: string =

`<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif">`

  constructor(public spinner: NgxSpinnerService, public spinnerService: Ng4LoadingSpinnerService, public app: AppComponent, public _router: Router) {

  		// this.isLoading = true;
		// this.spinnerService.show();
    // this._router.events.subscribe((routerEvent: Event)=>{

    //   if(routerEvent instanceof NavigationStart){


    //   	this.isLoading = true;
    //      // this.spinnerService.hide();

    //   }

    //   if(routerEvent instanceof NavigationEnd){

    //   	this.isLoading = false;
    //       // this.spinnerService.hide();

    //   }
    // })


   }

  

  ngOnInit() {

  	this.app.isPressed = false;
  	 // this.spinnerService.show();
 
    // setTimeout(() => {
    //     // * spinner ends after 5 seconds 
    //     this.spinnerService.hide();
    // }, 5000);
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0

        };
 
    this.myParams = {
            particles: {
                number: {
                    value: 500,
                },
                color: {
                    value: '#90caf9'
                },
                shape: {
                    type: 'triangle',
                }
        }
    };
  }

}
