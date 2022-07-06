import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/upload.service';
import { ProductoApi } from 'src/app/models/ProductoApi.models';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  providers: [ApiService]
})
export class ProductPageComponent implements OnInit {
  direccion: string = '../product-page/add-product-page';
  info: string = '';
  percentDone: number | undefined;
  uploadSuccess: boolean | undefined;
  areOptionsEditable: boolean = true;
  public archivo?: ProductoApi;
  public archivoServer?: ProductoApi;
  public lastPK?: number;

  
  constructor(
    private http: HttpClient,
    private _service: ApiService
    ) {}

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
  subirArchivo(archivo: ProductoApi){
    this._service.uploadFile(this.archivo).subscribe(Response => {});
  }
  fileEvent(fileInput: Event){
    let file = (<HTMLInputElement>fileInput.target).files[0];
    if(file.type == "image/jpeg" || file.type == "image/png"){
      this.archivo = new ProductoApi(this.lastPK + 1, file.name, file.type);
    }
  }
  ngOninit(): void{
    this._service.getUploads().subscribe(Response =>{
      this.archivoServer = Response;
      this.lastPK = this.archivoServer[Response.length -1].id;
    });

  }


}
