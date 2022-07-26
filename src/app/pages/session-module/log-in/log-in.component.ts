import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../models/usuario.models';

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

  form: FormGroup
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputUser: [''],
      inputPassword: ['']
    })
   }

  ngOnInit(): void {
  }
  
  IniciarSesion(){
    console.log(this.form)
    this.usuarios.forEach(usuario => {
      if(this.form.get("inputUser")?.value == usuario.emailUser && this.form.get("inputPassword")?.value == usuario.passwordUser){
        const datos: User = {
          emailUser: this.form.get("inputUser")?.value,
          passwordUser: this.form.get("inputPassword")?.value
        }
        console.log(datos)
      }else{
        console.log('user and password are not correct')
      }
    });
  }
  // validarLogin(){ 
  //   const AsInputUsuario = this.InputUsuario.nativeElement.value;
  //   const AsInputContrasena = this.InputContrasena.nativeElement.value;
  //   for(let usuario of this.usuarios){
  //     if(AsInputUsuario == '' && AsInputContrasena == ''){
  //       alert("Debe llenar los campos")
  //       this.ruta = '/log-in';
  //     }else if(AsInputUsuario == usuario.emailUser && AsInputContrasena != usuario.passwordUser){
  //       alert("Contraseña incorrecta")
  //       this.ruta = '/log-in';
  //     }else if(AsInputUsuario == usuario.emailUser && AsInputContrasena == ''){
  //       alert("Debe ingresar su contraseña")
  //       this.ruta = '/log-in';
  //     }else if(AsInputUsuario == '' && AsInputContrasena == usuario.passwordUser){
  //       alert("Debe ingresar el usuario")
  //       this.ruta = '/log-in';
  //     }else{
  //       this.ruta = '';
  //     }
  //   }
  // }
}
