import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  register: FormGroup
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private userService: UsersService
    ){
      this.register = this.fb.group({
        inputUser: ['', Validators.required],
        inputUserName: ['', Validators.required],
        inputPassword: ['', [Validators.required, Validators.minLength(6)]],
        inputRepeatPassword: ['', Validators.required],
      }, {validator: this.checkPassword})
   }
  ngOnInit(): void {

  }
  registerUser(){
    const user: User = {
      UserEmail: this.register.value.inputUser,
      UserName: this.register.value.inputUserName,
      UserPassword: this.register.value.inputPassword
    }
    console.log(user)
    this.loading = true;
    this.userService.saveUser(user).subscribe(data =>{
      console.log(data);
      this.toastr.success('El usuario ' + user.UserEmail + ' fue registrado con exito', 'Usuario Registrado!');
      this.router.navigate(['/log-in']);
      this.loading = false;
    }, error => {
      console.log(error.error);
      this.toastr.error('El usuario ' + user.UserEmail + ' ya existe', 'Ese usuario ya existe!')
      this.loading = false;
      this.register.reset();
      console.log(this.register);
    });
  }
  checkPassword(group: FormGroup): any{
    const pass = group.controls.inputPassword.value;
    const confirmPass = group.controls.inputRepeatPassword.value;
    return pass === confirmPass ? null : {notSame: true}
  }
}