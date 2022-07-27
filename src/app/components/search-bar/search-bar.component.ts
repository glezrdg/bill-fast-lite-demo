import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  productText: string = '';
  @Input() direccion?: string;
  @Input() funcionModal?: () => void;
  @Output() enviarProductoABuscar  =  new EventEmitter<string>();

  name: any
  constructor(private router: Router){}

  ngOnInit(): void {

  }

  isDirectionBill(): boolean{
    if(this.router.url == '/bill-page' || this.router.url == '/client-page'){
      return true;
    }
    return false;
  }
  selected = "Filtrar por"
  opciones = ["fecha", "id", "otra cosa"]

  onPropagarMensaje(){
    this.enviarProductoABuscar.emit(this.productText);
  }
}
