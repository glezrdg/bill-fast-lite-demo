import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {
  ruta: string = '../bill-page/add-bill-page' 
  info: string = '';
  buscarProducto(info: string){
    this.info = info;
     console.log(info);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
