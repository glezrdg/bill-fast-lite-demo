import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/cliente.models';
import { UsersService } from 'src/app/services/users.service';
import { addclientService } from '../../services/addClientService.service';
import { billFastLiteApiUrl } from '../../services/billfastlite-api.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {
  
  clientList:  Observable<any[]>;
  
  constructor(private service: billFastLiteApiUrl) { }

  ngOnInit(): void {
    this.clientList = this.service.getClient();
  }

}
