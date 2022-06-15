import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client-page',
  templateUrl: './add-client-page.component.html',
  styleUrls: ['./add-client-page.component.scss']
})
export class AddClientPageComponent implements OnInit {

  nombreORazonSocial: string = '';
  tipoDeDocumento: string = '';
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
