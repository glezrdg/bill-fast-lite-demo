import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models/usuario.models';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  ruta = '';
  @ViewChild("AsInputUsuario") InputUsuario: ElementRef;
  @ViewChild("AsInputContrasena") InputContrasena: ElementRef;


  form: FormGroup
  constructor(
    private fb: FormBuilder,
    private UsersService: UsersService
    ) {
    this.form = this.fb.group({
      inputUser: [''],
      inputPassword: ['']
    })
   }

  ngOnInit(): void {
  }
  
  IniciarSesion(){
    
  }
}
