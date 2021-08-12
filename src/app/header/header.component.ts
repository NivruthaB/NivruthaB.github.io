import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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