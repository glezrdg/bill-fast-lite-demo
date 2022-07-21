import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product, AddProductDTO, ProductItem } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: ProductItem[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    const index = this.myShoppingCart.findIndex(item => item.id === product.id)
    if(index !== -1){
      this.myShoppingCart[index].qty += 1
    }else {
      let newProduct: ProductItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        qty: 1
      }
      this.myShoppingCart.push(newProduct)
    }
  }

  removeProduct(id: string){
    const exist = this.myShoppingCart.findIndex(item => item.id === id)

    if(this.myShoppingCart[exist].qty === 1){
      this.myShoppingCart.splice(exist, 1)
    }
    else {
      this.myShoppingCart[exist].qty -= 1
    }
   
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
