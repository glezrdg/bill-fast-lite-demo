import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: ''
    },
    description: ''
  };

  @Output() addedListProduct = new EventEmitter<string>();

  constructor() { }

  onAddToCart() {
    this.addedListProduct.emit(this.product.id);
    console.log(this.product.id);
    
  }

}