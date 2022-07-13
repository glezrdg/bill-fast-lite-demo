import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { observable, Observable } from 'rxjs';
import{billFastLiteApiUrl} from '../../../app/services/billfastlite-api.service'

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {
  ruta: string = '../client-page/add-client-page';
  @ViewChild("checkbox") checkbox!: ElementRef;
  @ViewChild("modal") modal: ElementRef;
  @ViewChild("AsTipoComprobante") tipoComprobante: ElementRef;
  @ViewChild("AsTipoDocumento") tipoDocumento: ElementRef;
  @ViewChild("AsInputNumDoc") inputNumDoc: ElementRef;

  tipoDeComprobanteFiscalList:  Observable<any[]>;

  constructor(private renderer2: Renderer2, private service: billFastLiteApiUrl) { }

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
    // this.renderer2.setStyle(AsTipoComprobante, style:'color', value:'red');
  }
  ngOnInit(): void {
    this.openModal = this.openModal.bind(this)
    this.tipoDeComprobanteFiscalList  = this.service.getTaxReceiptType();
  }
  
  openModal(){
    this.modal.nativeElement.showModal()
    console.log(this.modal);
  }
  closeModal(){
    this.modal.nativeElement.close()
    // console.log(this.modale);
  }

}
