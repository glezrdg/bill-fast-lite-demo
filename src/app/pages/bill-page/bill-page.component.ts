import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit {
  ruta: string = '../bill-page/consult-bill-page' 
  constructor() { }

  ngOnInit(): void {
  }
}
