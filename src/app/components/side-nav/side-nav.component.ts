import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  showNav = false;
  showNavItems = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  public get milocopero() {
    console.log('funciona');
    this.showNav = !this.showNav;
    setTimeout(() => {
      this.showNavItems = !this.showNavItems;
    }, 100);

    return null;
  }


}