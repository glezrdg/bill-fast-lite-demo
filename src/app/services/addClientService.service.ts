import { Cliente } from "../models/cliente.models";

export class addclientService{
    clientes: Cliente[] = [];

    agregarCliente(cliente: Cliente){
        this.clientes.push(cliente);
    }
}