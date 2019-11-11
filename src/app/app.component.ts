import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { trigger, transition, animate, style,query } from '@angular/animations';
import { fadeAnimation } from './animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
  
  
})

export class AppComponent {
  hideHeader;
  constructor(private router: Router) {    // put your code here
    router.events.subscribe((val) => {
      // see also 
      if(val['url']!==undefined && val['url'] =='/'){
        this.loaderfunction(true);
      }
      if(val['url']!==undefined && val['url'] =='/home'){
        this.loaderfunction(false);
      }
      
  });
 
 }

  ngOnInit() {
  
      if (performance.navigation.type == 1) {
        this.loaderfunction( (/true/i).test(localStorage.getItem('log')));
      } 
   
  }
  loaderfunction(action) {
    localStorage.setItem('log',action)
    this.hideHeader = (/true/i).test(localStorage.getItem('log')) 
  }
}
