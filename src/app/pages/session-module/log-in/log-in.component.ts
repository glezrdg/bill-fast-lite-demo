import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user.models';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { login } from 'src/app/models/login.models';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  ruta = '';
  @ViewChild("AsInputUsuario") InputUsuario: ElementRef;
  @ViewChild("AsInputContrasena") InputContrasena: ElementRef;

  login: FormGroup
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService
    ) {
    this.login = this.fb.group({
      inputUser: ['', Validators.required],
      inputPassword: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  log(): void{
    const user: login = {
      emailUser: this.login.value.inputUser,
      passwordUser: this.login.value.inputPassword
    }
    this.loading = true;
    this.loginService.login(user).subscribe(data =>{
      console.log(data);
      this.loading = false;
      this.loginService.setLocalStorage(data.inputUser)
      this.router.navigate(['/dashboard']);
    }, error =>{
      this.toastr.error('Usuario o contraseña invalidos' , 'Error');
      this.login.reset();
      this.loading = false;
      console.log('Error: ', error)
    })
  }
}
