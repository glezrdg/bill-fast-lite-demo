import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  verificarRuta(): boolean{
    let arrayDeRutas = [
      '/bill-page',
      'bill-page/:consult-bill-page',
      'client-page',
      ''
    ];
    for(let ruta of arrayDeRutas){
      if(this.router.url.includes(ruta)){
        return true;
      }
    }
    return false;

  }

}