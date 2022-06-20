import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.models';
import { UsersService } from 'src/app/services/users.service';
import { addclientService } from '../../services/addClientService.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {
  
  clientes: Cliente[] = [];
  
  constructor(private addclientService: addclientService) { }

  ngOnInit(): void {
    this.clientes = this.addclientService.clientes;
    console.log(this.clientes)
  }

}
