import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ) { }


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

  counter: Product[] = [];

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products;
    });
  }

  ruta: string = '../bill-page/add-bill-page' 
  info: string = '';
  
  option = {
    one: '',
    two: '',
    three: '',
  }


  buscarProducto(info: string){
    this.info = info;
     console.log(info);
  }
  

  
}
