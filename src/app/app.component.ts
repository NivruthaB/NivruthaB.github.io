import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks: any[]  = [];
  activeLinkIndex = -1; 
  
  constructor(private http : HttpClient, private router: Router){
    this.navLinks = [
      {
          label: 'MENU',
          link: '/menu',
          index: 0
      },
      {
        label: 'LOCATIONS',
        link: '/locations',
        index: 1
    }
  ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
 
}
