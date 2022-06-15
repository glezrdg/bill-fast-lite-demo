import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bill-page',
  templateUrl: './add-bill-page.component.html',
  styleUrls: ['./add-bill-page.component.scss']
})
export class AddBillPageComponent implements OnInit {
  cant: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
