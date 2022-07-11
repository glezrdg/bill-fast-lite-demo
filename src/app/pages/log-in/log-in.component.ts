import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../models/usuario.models';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  ruta = '';
  @ViewChild("AsInputUsuario") InputUsuario: ElementRef;
  @ViewChild("AsInputContrasena") InputContrasena: ElementRef;

  // simulacion de los datos de la base de datos
  usuarios: User[] = [
    {emailUser: "nasser@correo.com", passwordUser: "123"},
    {emailUser: "fulano@correo.com", passwordUser: "456"},
    {emailUser: "pepe@correo.com", passwordUser: "789"},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  validarLogin(){
    const AsInputUsuario = this.InputUsuario.nativeElement.value;
    const AsInputContrasena = this.InputContrasena.nativeElement.value;
    for(let usuario of this.usuarios){
      if(AsInputUsuario == '' && AsInputContrasena == ''){
        alert("Debe llenar los campos")
        this.ruta = '/log-in';
      }else if(AsInputUsuario == usuario.emailUser && AsInputContrasena != usuario.passwordUser){
        alert("Contraseña incorrecta")
        this.ruta = '/log-in';
      }else if(AsInputUsuario == usuario.emailUser && AsInputContrasena == ''){
        alert("Debe ingresar su contraseña")
        this.ruta = '/log-in';
      }else if(AsInputUsuario == '' && AsInputContrasena == usuario.passwordUser){
        alert("Debe ingresar el usuario")
        this.ruta = '/log-in';
      }else{
        this.ruta = '';
      }
    }
  }
}
