import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  itemsInCart : any[] = []
  private componentMethodCallSource = new Subject<any>();
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  constructor() { }

  setItemsInCart(itemsInCart : any){
    this.itemsInCart = itemsInCart
    this.componentMethodCallSource.next();
  }
  getCartItemsDetails(){
    return this.itemsInCart
  }
}
