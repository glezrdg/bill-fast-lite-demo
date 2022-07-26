import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{
  productText: string = '';
  @Input() direccion?: string;
  @Input() funcionModal?: () => void;
  @Output() enviarProductoABuscar  =  new EventEmitter<string>();
  
  selected = "Filtrar por"
  options = ["fecha", "id", "otra cosa"]
  
  

  onPropagarMensaje(){
    this.enviarProductoABuscar.emit(this.productText);
  }
}
