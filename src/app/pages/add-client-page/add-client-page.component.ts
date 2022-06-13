import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client-page',
  templateUrl: './add-client-page.component.html',
  styleUrls: ['./add-client-page.component.scss']
})
export class AddClientPageComponent implements OnInit {

  nombreORazonSocial: string = '';
  tipoDeDocumento: string = '';
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
