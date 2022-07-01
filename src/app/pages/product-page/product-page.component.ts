import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Category } from '../../models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  ruta: string = '../product-page/add-product-page';
  productText: string = '';
  Category: string = "Categoria";
  @ViewChild("modal") modal!: ElementRef;
  openModal(){
    this.modal.nativeElement.showModal()
    // console.log(this.modale);
  }
  constructor() { }
  areOptionsEditable: boolean = true;
  

  ngOnInit(): void {
  }

}
