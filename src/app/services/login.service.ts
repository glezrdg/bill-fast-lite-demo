import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { login } from '../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myApiUrl =`${environment.endpoint}/api/Login`;
  constructor(private http: HttpClient) {
   }
   login(usuario: login): Observable<any>{
    return this.http.post(this.myApiUrl, usuario);
   }
   setLocalStorage(data: any): void{
    localStorage.setItem('emailUser', data);
   }
   getNombreUsuario(): any{
    return localStorage.getItem('emailUser');
   }
}