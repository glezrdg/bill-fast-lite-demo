import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.models';
import { addclientService } from '../../services/addClientService.service';

@Component({
  selector: 'app-add-client-page',
  templateUrl: './add-client-page.component.html',
  styleUrls: ['./add-client-page.component.scss'],
  providers: [addclientService]
})
export class AddClientPageComponent implements OnInit {
  clientes: Cliente[] = [];

  nombreORazonSocial: string = '';
  tipoDeDocumento: string = '';
  numeroDeDocumento: number = 0;
  correoClientes: string = '';
  telefono: number =0;
  celular: number = 0;
  direccion: string = '';
  comentarios: string = '';

  constructor(private addclientService: addclientService) { }
  
  ngOnInit(): void {
  }

  onClienteAgregado(){
    let cliente2: Cliente = {nombreORazonSocial: this.nombreORazonSocial, tipoDeDocumento: this.tipoDeDocumento, numeroDeDocumento: this.numeroDeDocumento,correoClientes: this.correoClientes, telefono: this.telefono, celular: this.celular, direccion: this.direccion, comentarios: this.comentarios }
    // let cliente1 = new Cliente(this.nombreORazonSocial, this.tipoDeDocumento, this.numeroDeDocumento, this.correoClientes, this.telefono, this.celular, this.direccion, this.comentarios);
    this.addclientService.agregarCliente(cliente2);
    console.log(cliente2)
  }

}
