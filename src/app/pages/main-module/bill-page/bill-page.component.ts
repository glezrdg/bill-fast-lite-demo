import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductItem } from '../../../models/product.model';
import { StoreService } from '../../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss'],
})
export class BillPageComponent implements OnInit {
  constructor(private storeService: StoreService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }
  myShoppingCart: ProductItem[] = [];

  get sum() {
    return this.myShoppingCart.reduce((accumulator, object) => {
      return accumulator + object.price * object.qty;
    }, 0);
  }

  itbis: number = 0.18;

  @Input() product: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: '',
  };

  counter: Product[] = [];

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products;
    });
  }
  removeProduct(id: string){
    this.storeService.removeProduct(id)
  }
  ruta: string = '../bill-page/add-bill-page';
  info: string = '';

  option = {
    one: '',
    two: '',
    three: '',
  };

  buscarProducto(info: string) {
    this.info = info;
    console.log(info);
  }
}
