import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss'],
  host: {
    "(document:click)": "onClickOutside($event)",
  },
})
export class UserIconComponent implements OnInit {

  constructor(private _eref: ElementRef,
     private loginService: LoginService,
     private router: Router
     ) { }
  @ViewChild("AsDropdown") dropdown: ElementRef;

  ngOnInit(): void {
  }
  onClickMenu(){
    const AsDropdown = this.dropdown.nativeElement;
    AsDropdown.classList.toggle('hidden');
    AsDropdown.classList.toggle('flex');
  }
  onClickOutside(event: { target: any; }) {
    const AsDropdown = this.dropdown.nativeElement;
    if (!this._eref.nativeElement.contains(event.target))
      // ...
      AsDropdown.classList.add('hidden');
  }
  logOut(){
    this.loginService.removeLocalSotrage();
    this.router.navigate(['/log-in'])
  }

}

 