import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/upload.service';
import { ProductoApi } from 'src/app/models/ProductoApi.models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  providers: [ApiService]
})
export class ProductPageComponent implements OnInit {
  direccion: string = '../product-page/add-product-page';
  info: string = '';
  public archivos: any =[];
  public previsualizacion?: string;
  
  constructor(
    private http: HttpClient,
    private _service: ApiService,
    private sanitizer: DomSanitizer
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
  capturarFile(event: any){
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) =>{
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
    // this.archivos.push(archivoCapturado)
    //   console.log(event.target.files)
  }
  subirArchivo(): any{
    

  }
  extraerBase64 = async ($event: any) => new Promise((resolve)=>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

      
    } catch (error) {
      return error;
    }

  })

}
