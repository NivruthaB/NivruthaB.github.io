import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'profile';
  items = [
    {'APPETIZERS' : [
      {'name': 'Garlic Bread','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':"..\\..\\assets\\GarlicBread.jpg"},
      {'name': 'Garlic Bread with Cheese','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBreadCheese.jpg'},
      {'name': 'Garlic Bread with Feta, Cheese and Olives' ,'description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBreadCheeseOlive.jpg'}
    ]},
    {'PIZZA': [
      {'name':'Margherita','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
      {'name':'Piccolo','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
      {'name':'Spicy Treat','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
      {'name': 'Vegetable Bite','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
      {'name': 'Mexican Delight','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
      {'name': 'Cheese Blast Pizza','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'}
    ]},
    {'PASTA' : [{'name':'Roman Pasta','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
    {'name':'Creamy Indian Pasta','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
    {'name': 'Spaghetti Bolognese','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
    {'name':'Ravioli','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'}
    ]}, 
    {'DESSERT' : [{'name':'Banana Split','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
    {'name': 'Cookie Delight','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
    {'name': 'Brownie with Ice Cream','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'}, 
    {'name': 'Brownie Fudge','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
    {'name': 'Soft Drinks','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'},
    {'name': 'Water','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1', 'image':'..\\..\\assets\\GarlicBread.jpg'}] }
  ];
  expandedIndex = 0;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  itemsInCart :any[]= [];
  constructor(private http : HttpClient, private dashboardService : DashboardServiceService){}

  ngOnInit(): void {
  }

  incrementQuantity(menuitem:any){
    let currentItem = this.itemsInCart.filter(item => (item.name == menuitem.name))
    if(currentItem.length == 0){
    this.itemsInCart.push(
      {name : menuitem.name,
      quantity: (currentItem != null && currentItem.length > 0 ) ? currentItem[0].quantity + 1 : 1,
      image : menuitem.image,
      price : menuitem.price})
    }
    else{
      currentItem[0].quantity += 1
    }
    this.dashboardService.setItemsInCart(this.itemsInCart)
  }

  decrementQuantity(menuitem:any){
    let currentItem = this.itemsInCart.filter(item => (item.name == menuitem.name))
    if(currentItem.length != 0 && currentItem[0].quantity >= 2){
      currentItem[0].quantity -= 1
    }
    else if(currentItem.length != 0 && currentItem[0].quantity == 1){
      this.itemsInCart = this.itemsInCart.filter(item => (item.name != menuitem.name))
    }
    this.dashboardService.setItemsInCart(this.itemsInCart)
  }
}
