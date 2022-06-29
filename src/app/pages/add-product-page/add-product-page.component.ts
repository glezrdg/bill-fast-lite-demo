import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

  nombreORazonSocial: string = '';
  tipoDeDocumento: string = '';
  idDelProducto?: number;
  precioDeVenta?: number;
  precioDeCompra?: number;
  Ganancia?: number;
  DescripcionDelProducto: string = '';
  nombreDelProveedor: string = '';
  numeroDeDocumento?: number;
  correoClientes: string = '';
  telefono?: number;
  celular?: number;
  direccion: string = '';
  comentarios: string = '';

  public archivos: any = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  capturarImgProducto(event: any){
    const archivoCapturado = event.target.files
    this.extraerBase64(archivoCapturado).then(imagen =>{
      console.log(imagen);
    })
    this.archivos.push(archivoCapturado)
    // console.log(event.target.files);
  }
  extraerBase64 = async ($event: any) => new Promise((resolve)=> {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
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
    } catch (e) {
      return e;
    }
    return $event;
  })
}
