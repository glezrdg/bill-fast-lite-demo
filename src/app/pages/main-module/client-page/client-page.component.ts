
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {  Observable } from 'rxjs';
import { billFastLiteApiUrl } from '../../../services/billfastlite-api.service'
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {
  accion = 'Agregar';
  id: number | undefined;
  form: FormGroup;
  x = Math.floor(Math.random() * 100) + 1;
  ruta: string = '../client-page/add-client-page';
  @ViewChild("checkbox") checkbox!: ElementRef;
  @ViewChild("modal") modal: ElementRef;
  @ViewChild("AsTipoComprobante") tipoComprobante: ElementRef;
  @ViewChild("AsTipoDocumento") tipoDocumento: ElementRef;
  @ViewChild("AsInputNumDoc") inputNumDoc: ElementRef;
  
  @ViewChild("AsDropdown") dropdown: ElementRef;

  variable: boolean;

  tipoDeComprobanteFiscalList:  Observable<any[]>;
  clientList:  any[] = [];

  constructor(
    private _clientService: billFastLiteApiUrl,
    private _eref: ElementRef,
    private toastr: ToastrService,
    private fb: FormBuilder,
     ) {
      this.variable = false;
      this.form = this.fb.group({
        idCliente: [''],
        nombreORazonSocialCliente: ['', Validators.required],
        tipoDeComprobanteFiscal: [''],
        tipoDeDocumentoCliente: ['', Validators.required],
        numeroDeDocumentoCliente: ['', Validators.required],
        correoCliente: [''],
        telefonoCliente: [''],
        celularCliente: [''],
        direccionCliente: [''],
        comentarioCliente: [''],
      })
      }

  obtenerValue(): void{
    const AsTipoComprobante = this.tipoComprobante.nativeElement;
    const AsTipoDocumento = this.tipoDocumento.nativeElement;
    const AsInputNumDoc = this.inputNumDoc.nativeElement;
    
    if(AsTipoComprobante.value === "Factura de Crédito Fiscal (Tipo 01)"){
      AsTipoDocumento.innerHTML = `<option class="text-sm" selected disabled value="RNC">RNC</option>`
      AsInputNumDoc.placeholder = "B0100000005"
      
    }else if(AsTipoComprobante.value === "Factura de Consumo (Tipo 02)"){
      AsTipoDocumento.innerHTML = `<option class="text-sm" selected disabled value="Cedula">Cedula</option>`
      AsInputNumDoc.placeholder = "40247755893"
    }
    
  }
  ngOnInit(): void {
    this.openModal = this.openModal.bind(this)
    this.tipoDeComprobanteFiscalList  = this._clientService.getTaxReceiptType();
    this.obtenerClients();
    
  }

  obtenerClients() {
    this._clientService.getClient()
    .subscribe(data => {
      this.clientList = data
      console.log(data);
      
    }, error => {
      console.log(error);
      
    })
  }
  saveClient(){
    const client: any = {
      idCliente: this.x,
      nombreORazonSocialCliente: this.form.get('nombreORazonSocial')?.value,
      tipoDeComprobanteFiscal: this.form.get('tipoDeComprobante')?.value,
      tipoDeDocumentoCliente: this.form.get('tipoDeDocumento')?.value,
      numeroDeDocumentoCliente: this.form.get('numeroDeDocumento')?.value,
      correoCliente: this.form.get('correoClientes')?.value,
      telefonoCliente: this.form.get('telefono')?.value,
      celularCliente: this.form.get('celular')?.value,
      direccionCliente: this.form.get('direccion')?.value,
      comentarioCliente: this.form.get('comentarios')?.value,
    } 
    if(this.id == undefined){
      // a;adimos cliente
      this._clientService.addClient(client)
    .subscribe(data =>{
      this.obtenerClients();
      this.closeModal();
      this.toastr.success('se agrego el cliente', 'cliente agregado');
      this.form.reset();
    },error =>{
      console.log(error);
      console.log(client);
      this.id
      
    })
    }else{
      client.idCliente = this.id;
      //editamos
      this._clientService.updateClient(this.id ,client)
      .subscribe(data => {
        this.form.reset();
        this.accion = 'Agregar';
        this.id = undefined;
        this.toastr.info('se actualizo el cliente', 'cliente actualizado');
        this.obtenerClients()
      }, error =>{
        console.log(error)
        this.id
      })
    }

    
    
  }
  editClient(cliente: any){
    this.accion = 'Editar';
    this.id = cliente.idCliente;
    this.openModal()
    console.log(cliente, this.id);
    
    this.form.setValue({
      idCliente: cliente.idCliente,
      nombreORazonSocialCliente: cliente.nombreORazonSocialCliente,
      tipoDeComprobanteFiscal: cliente.tipoDeComprobanteFiscal,
      tipoDeDocumentoCliente: cliente.tipoDeDocumentoCliente,
      numeroDeDocumentoCliente: cliente.numeroDeDocumentoCliente,
      correoCliente: cliente.correoCliente,
      telefonoCliente: cliente.telefonoCliente,
      celularCliente: cliente.celularCliente,
      direccionCliente: cliente.direccionCliente,
      comentarioCliente: cliente.comentarioCliente
    })
    
    console.log(this.form);
    
  }

  deleteClient(idCliente: number){
    this._clientService.deleteClient(idCliente)
    .subscribe(data => {
      this.obtenerClients()
      this.toastr.error('Se borro', 'Cliente Eliminado')
    }, error => {
      console.log(error);
      
    })

  }
  ave(cliente: any){
    console.log(cliente);
    
  }
 
  
  openModal(){
    this.modal.nativeElement.showModal()
    console.log(this.modal);
  }
  closeModal(){
    this.modal.nativeElement.close()
    // console.log(this.modale);
  }


  // Acciones del item
  onClickMenu(){
    const AsDropdown = this.dropdown.nativeElement;
    AsDropdown.classList.toggle('hidden');
    AsDropdown.classList.toggle('flex');
  }
  onClickOutside(event: { target: any; }) {
    const AsDropdown = this.dropdown.nativeElement;
    if (!this._eref.nativeElement.contains(event.target))
      // ...
      AsDropdown.classList.add('hidden');
  }
  

}
