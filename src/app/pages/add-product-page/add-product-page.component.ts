import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

  nombreORazonSocial: string = '';
  tipoDeDocumento: string = '';
  idDelProducto: number = 0;
  precioDeVenta: number = 0;
  precioDeCompra: number = 0;
  Ganancia: number = 0;
  DescripcionDelProducto: string = '';
  nombreDelProveedor: string = '';
  numeroDeDocumento: number = 0;
  correoClientes: string = '';
  telefono: number = 0;
  celular: number = 0;
  direccion: string = '';
  comentarios: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
