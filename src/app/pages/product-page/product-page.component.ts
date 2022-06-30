import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  ruta: string = '../product-page/add-product-page';
  Category: string = "Categoria";
 
  constructor() { }
  areOptionsEditable: boolean = true;
  

  ngOnInit(): void {
  }

}
