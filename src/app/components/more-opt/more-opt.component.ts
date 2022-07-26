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

  @ViewChild("AsDropdown") dropdown: ElementRef;

  variable: boolean;
  constructor(private _eref: ElementRef){
    this.variable = false

  }
  ngOnInit(): void {
  }
  onClickMenu(){
    const AsDropdown = this.dropdown.nativeElement;
    AsDropdown.classList.toggle('hidden');
    AsDropdown.classList.toggle('flex');
  }
  onClickOutside(event: { target: any; }) {
    const AsDropdown = this.dropdown.nativeElement;
    if (!this._eref.nativeElement.contains(event.target))
      // ...
      AsDropdown.classList.add('hidden');
  }
  


}
