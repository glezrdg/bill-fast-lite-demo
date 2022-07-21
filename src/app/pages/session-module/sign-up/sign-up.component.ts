import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { style } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/usuario.models';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  form: FormGroup
  usuarios: User[]=[
    

  ]
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputUser: ['', Validators.required, Validators['email']],
      inputPassword: ['', Validators.required, Validators.minLength(8)],
      inputRepeatPassword: ['', Validators.required, Validators.minLength(8)],
    })
   }
  ngOnInit(): void {

  }
  RegistrarUsuario(){
    console.log(this.form)
    if(this.form.get("inputPassword") != this.form.get("inputRepeatPassword")){
      const datos: User = {
        emailUser: this.form.get("inputUser")?.value,
        passwordUser: this.form.get("inputPassword")?.value,
      }
      console.log(datos)
      this.usuarios.push(datos);
      console.log(this.usuarios)
      this.form.reset();
    }else{
      alert("the password does not match");

    }

  }
}
