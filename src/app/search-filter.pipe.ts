import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure:false
})
export class SearchFilterPipe implements PipeTransform {

  transform(itemsInCart: any[], currentItem : any ): any{
    let item = itemsInCart.filter(item => (item.name == currentItem.name))
    if(itemsInCart.length > 0 &&  item.length > 0){
      return itemsInCart.filter(item => (item.name == currentItem.name))[0].quantity;      
    }
    else{
      return 0
    }
  }

}
