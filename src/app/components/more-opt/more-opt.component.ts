import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-more-opt',
  templateUrl: './more-opt.component.html',
  styleUrls: ['./more-opt.component.scss'],
  host: {
    "(document:click)": "onClickOutside($event)",
  },
})
export class MoreOptComponent implements OnInit {

  ngOnInit(): void {
  }
  


}
