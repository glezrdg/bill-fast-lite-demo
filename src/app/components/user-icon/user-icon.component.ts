import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
  host: {
    "(document:click)": "onClickOutside($event)",
  },
})
export class UserIconComponent implements OnInit {

  constructor(private _eref: ElementRef) { }
  @ViewChild("AsDropdown") dropdown: ElementRef;

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

 