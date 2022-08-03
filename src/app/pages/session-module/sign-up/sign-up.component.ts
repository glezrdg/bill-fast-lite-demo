import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';


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
    private userService: UsersService
    ){
      this.register = this.fb.group({
        inputUser: ['', Validators.required],
        inputPassword: ['', Validators.required, Validators.minLength(8)],
        inputRepeatPassword: ['', Validators.required],
      }, {validator: this.checkPassword})

   }
  ngOnInit(): void {

  }
  registerUser(){
    const user: User = {
      emailUser: this.register.value.inputUser,
      passwordUser: this.register.value.inputPassword
    }
    this.loading = true;
    this.userService.saveUser(user).subscribe(data =>{
      console.log(data);   
      this.router.navigate(['/dashboard']);
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
      this.register.reset();
   
    });
    console.log(this.register);
  }
  checkPassword(group: FormGroup): any{
    const pass = group.controls['inputPassword'].value;
    const confirmPass = group.controls['inputRepeatPassword'].value;
    return pass === confirmPass ? null : {notSame: true}
  }
}