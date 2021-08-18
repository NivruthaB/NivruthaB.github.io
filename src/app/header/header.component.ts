import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DashboardServiceService } from '../dashboard-service.service';
import { Subscription } from 'rxjs';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { MatTooltip } from '@angular/material/tooltip';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any[]  = [];
  activeLinkIndex = -1; 
  itemsInCart : any;
  numberOfItemsIncart : number = 0
  productCartValue : number = 0
  @ViewChild(MatMenuTrigger) triggerBtn: MatMenuTrigger | undefined;
  
  constructor(private http : HttpClient, private router: Router, private dialog: MatDialog, private dashboardService : DashboardServiceService){
    this.navLinks = [
      {
        label: 'HOME',
        link: '/home',
        index: 0
    },
      {
          label: 'MENU',
          link: '/menu',
          index: 1
      },
      {
        label: 'LOCATIONS',
        link: '/locations',
        index: 2
    }
  ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
    this.dashboardService.componentMethodCalled$.subscribe(() => {
      this.triggerBtn?.openMenu()
      this.itemsInCart = this.dashboardService.itemsInCart
      this.numberOfItemsIncart = 0
      this.productCartValue = 0
      this.itemsInCart.forEach((element:any) => {this.numberOfItemsIncart += element.quantity 
      this.productCartValue += element.quantity*element.price});
      console.log(this.productCartValue)
    });    
  }
  
  closeMenu() {
    this.triggerBtn?.closeMenu()
  }


}
