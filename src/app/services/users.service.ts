import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.models';
  
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private myApiUrl = `${environment.endpoint}/api/User`;
     
  constructor(private http: HttpClient) { }
    
  saveUser(user: User){
    return this.http.post(this.myApiUrl, user);

  }
}