import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  users:any;
  p: number = 1;
  total: number = 0;

  constructor(private service:UsersService) { }

  ngOnInit(): void {
  }
  getUsers(){
    this.service.getUsers(this.p)
      .subscribe((response: any) => {
        this.users = response.data;
        this.total = response.total;
      });
  } 
  pageChangeEvent(event: number){
    this.p = event;
    this.getUsers();
  }

}
