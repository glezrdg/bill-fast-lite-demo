import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['./password-page.component.scss']
})
export class PasswordPageComponent implements OnInit {

  changePassword: FormGroup
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UsersService,
    private router: Router

  ) {
    this.changePassword = this.fb.group({
      inputCurrentPassword: ['', Validators.required],
      inputNewPassword: ['', [Validators.required, Validators.minLength(6)]],
      inputRepeatNewPassword: ['', Validators.required]
    }, {validator: this.checkPassword})

   }

  ngOnInit(): void {
  }

  // ngsubmit del form changepassword
  changeP(){
    console.log(this.changePassword);
    const changePassowrd: any = {
      oldPassowrd: this.changePassword.value.inputCurrentPassword,
      newPassword: this.changePassword.value.inputNewPassword
    }
    console.log(changePassowrd)
    this.loading = true;
    this.userService.changePassword(changePassowrd).subscribe(data =>{
      this.toastr.info('Contraseña actualizada correctamente');
      this.router.navigate(['/dashboard'])
    }, error =>{
      console.log(error);
      this.loading = false;
      this.changePassword.reset();
      this.toastr.error('Hubo un error al cambiar la contraseña', 'Error!')
    })
  }

  checkPassword(group: FormGroup): any{
    const pass = group.controls.inputNewPassword.value;
    const confirmPass = group.controls.inputRepeatNewPassword.value;
    return pass === confirmPass ? null : {notSame: true}
  }
}
