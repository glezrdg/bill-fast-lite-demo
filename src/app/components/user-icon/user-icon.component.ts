import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent implements OnInit {

  constructor() { }
  @ViewChild("AsDropdown") dropdown: ElementRef;

  ngOnInit(): void {
  }
  onClick(){
    const AsDropdown = this.dropdown.nativeElement;
    AsDropdown.classList.toggle('hidden');
    AsDropdown.classList.toggle('flex');
    // if(AsDropdown.classList.contains('hidden')){
    //   document.body.addEventListener(
    //     'click',()=>{
    //       AsDropdown.classList.remove('flex');
    //       AsDropdown.classList.add('hidden');
    //     })
    // }
  }
}

 