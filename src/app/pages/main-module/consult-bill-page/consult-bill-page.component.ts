import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-bill-page',
  templateUrl: './consult-bill-page.component.html',
  styleUrls: ['./consult-bill-page.component.scss']
})
export class ConsultBillPageComponent implements OnInit {
  ruta: string = '../'
  idFactura: string = "P-10291";
  cliente: string = 'Laptop';
  fecha: string = '25/4/2022';
  total: number = 3.290;
  estado: string = "Saldado";
  constructor() { }

  ngOnInit(): void {
  }

}
