import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {
  ruta: string = '../client-page/add-client-page';
  constructor() { }

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
