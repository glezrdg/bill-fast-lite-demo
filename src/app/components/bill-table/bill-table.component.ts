import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.scss']
})
export class BillTableComponent implements OnInit {
  idFactura: string = "P-10291";
  cliente: string = 'Laptop';
  fecha: string = '25/4/2022';
  total: number = 3.290;
  estado: string = "Saldado";
  constructor() { }

  ngOnInit(): void {
  }

}
