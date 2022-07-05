import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  direccion: string = '../product-page/add-product-page';
  info: string = '';
  percentDone: number | undefined;
  uploadSuccess: boolean | undefined;
  areOptionsEditable: boolean = true;
  
  constructor(private http: HttpClient) {}
  buscarProducto(info: string){
    this.info = info;
     console.log(info);
  }
  
  @ViewChild("modal") modal!: ElementRef;
  ngOnInit(): void {
    this.openModal = this.openModal.bind(this)
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
