import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-listofflineevents',
  templateUrl: './listofflineevents.component.html',
  styleUrls: ['./listofflineevents.component.css']
})
export class ListofflineeventsComponent implements OnInit {

 
  constructor(private app: AppComponent) { }

  ngOnInit() {
  this.app.isPressed = true;

  	console.log(this.app.isPressed);

var dance = {
  
  init: function() {
    this.dance();
  },
  
  config: {
    newSize: 40,
  },
  
  dance: function(config) {
    var newText = '',
        h1 = $('h1'),
        text = $('h1').text(),
        oldSize = h1.css('font-size'),
        length = text.length,
        i;
  
    for( i = 0; i < length; i++ ) {
      
      newText += '<span>' + text.charAt(i) + '</span>';    
    }
    
    h1.html(newText);
    
    h1.on('mouseenter mouseleave', 'span', function(e) {
      var span = $(this);
      
      if( e.type == 'mouseenter') {
         
        span.stop(true,false).animate({fontSize: dance.config.newSize + 'px'});
        
      } else if( e.type == "mouseleave" ) {
        
        span.animate({fontSize: oldSize});
      }  
    });
  }
};

$(function() {
  dance.init();
});








  }

}
