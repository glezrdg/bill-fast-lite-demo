import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  constructor() { }
  idProduct: string = "P-10291";
  nameProduct: string = 'Laptop';
  PriceProduct: number = 20.93;
  CantProduct: number = 9;
  ngOnInit(): void {
  }


}
