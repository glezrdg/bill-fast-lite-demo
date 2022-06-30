import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  @Input() direccion?: string;
  selected = "Filtrar por"
  opciones = ["fecha", "id", "otra cosa"]
  ruta?: {};
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta = this.rutaActiva.snapshot.params
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.ruta = params
        console.log(this.ruta)
      }
    );

  }
  ngOnDestroy(): void {
      
  }

}
