import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

  nombreORazonSocial: string = '';
  tipoDeDocumento: string = '';
  idDelProducto?: number;
  precioDeVenta?: number;
  precioDeCompra?: number;
  Ganancia?: number;
  DescripcionDelProducto: string = '';
  nombreDelProveedor: string = '';
  numeroDeDocumento?: number;
  correoClientes: string = '';
  telefono?: number;
  celular?: number;
  direccion: string = '';
  comentarios: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
