export interface Cliente {
  idCliente: number;
  nombreORazonSocialCliente: string;
  tipoDeDocumentoCliente: string;
  tipoDeComprobanteFiscal: string;
  numeroDeDocumentoCliente: number;
  correoCliente: string;
  telefonoCliente: number;
  celularCliente: number;
  direccionCliente: string;
  comentarioCliente: string;
}
export interface DTOCliente extends Partial<Cliente>{
  
}