import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any[]  = [];
  activeLinkIndex = -1; 
  
  constructor(private http : HttpClient, private router: Router, private dialog: MatDialog){
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

  openDialog() {
    // const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false});
    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    // dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

}
