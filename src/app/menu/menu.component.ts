import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'profile';
  items = [
    {'APPETIZERS' : [
      {'name': 'Garlic Bread','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
      {'name': 'Garlic Bread with Cheese','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
      {'name': 'Garlic Bread with Feta, Cheese and Olives' ,'description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'}
    ]},
    {'PIZZA': [
      {'name':'Margherita','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
      {'name':'Piccolo','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
      {'name':'Spicy Treat','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
      {'name': 'Vegetable Bite','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
      {'name': 'Mexican Delight','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
      {'name': 'Cheese Blast Pizza','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'}
    ]},
    {'PASTA' : [{'name':'Roman Pasta','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
    {'name':'Creamy Indian Pasta','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
    {'name': 'Spaghetti Bolognese','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
    {'name':'Ravioli','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'}
    ]}, 
    {'DESSERT' : [{'name':'Banana Split','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
    {'name': 'Cookie Delight','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
    {'name': 'Brownie with Ice Cream','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'}, 
    {'name': 'Brownie Fudge','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
    {'name': 'Soft Drinks','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'},
    {'name': 'Water','description':'Garlic roll with herb butter, cheese and garlic pulp.', 'price':'1$'}] }
  ];
  expandedIndex = 0;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  itemsInCart :any[]= [];
  constructor(private http : HttpClient){}

  ngOnInit(): void {
  }
  incrementQuantity(menuitem:any){
    let currentItem = this.itemsInCart.filter(item => (item.name == menuitem.name))
    if(currentItem.length == 0){
    this.itemsInCart.push(
      {name : menuitem.name,
      quantity: (currentItem != null && currentItem.length > 0 ) ? currentItem[0].quantity + 1 : 1})
      console.log(this.itemsInCart)
    }
    else{

    }
        
  }

  decrementQuantity(menuitem:any){
    this.itemsInCart.filter(item => (item != menuitem))
  }
}
