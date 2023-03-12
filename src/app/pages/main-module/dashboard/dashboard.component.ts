import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent implements OnInit {
  
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.getUserName()
  }
  user: any;
  
  getUserName(): void{
    this.user = this.loginService.getNombreUsuario();
  }
  

}
