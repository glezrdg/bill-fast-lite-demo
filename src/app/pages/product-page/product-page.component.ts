import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  ruta: string = '../product-page/add-product-page';
  info: string = '';
  buscarProducto(info: string){
    this.info = info;
     console.log(info);
  }
  constructor() { }
  areOptionsEditable: boolean = true;
  

  ngOnInit(): void {
  }

}
