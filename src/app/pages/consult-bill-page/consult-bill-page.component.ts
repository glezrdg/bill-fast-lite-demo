import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-bill-page',
  templateUrl: './consult-bill-page.component.html',
  styleUrls: ['./consult-bill-page.component.scss']
})
export class ConsultBillPageComponent implements OnInit {
  ruta: string = '../bill-page/consult-bill-page'
  cant: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
