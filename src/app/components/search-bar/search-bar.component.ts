import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  
  selected = "Filtrar por"
  opciones = ["fecha", "id", "otra cosa"]


  constructor() { }
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  onPropagarMensaje(){
    this.enviarProductoABuscar.emit(this.productText);
  }
}
