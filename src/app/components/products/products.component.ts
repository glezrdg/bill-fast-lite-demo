import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product, ProductItem } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() productFilter: string = '';
  myShoppingCart: ProductItem[] = [];
  total = 0;
  products: Product[] = [];
  filterProducts: Product[] = [];



  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }

  ngOnChanges(): void {
    this.filterProducts = this.products.filter((p) =>
      p.title.toLowerCase().includes(this.productFilter.toLowerCase())
    );
  }

  chooseProducts(): Product[] {
    if (this.filterProducts.length > 0) return this.filterProducts;
    else return this.products;
  }

  addProduct(product: Product){
    this.storeService.addProduct(product)
  }

  
}
