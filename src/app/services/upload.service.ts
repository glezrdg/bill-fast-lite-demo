import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Global} from "./global";
import { Observable, observable } from 'rxjs';
import { ProductoApi } from '../models/ProductoApi.models';

@Injectable()
export class ApiService{
    public url: string;
    constructor(private _http: HttpClient){
        this.url = Global.urlConnection;
    }
    uploadFile(File: any): Observable<any>{
        var peticion = "https://localhost:44392/api/productos";
        var json = JSON.stringify(File);
        console.log(File);
        var headers = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url + peticion, File, {headers});
    } 
    getUploads(): Observable<any>{
        var peticion = "https://localhost:44392/api/productos";
        return this._http.get(this.url + peticion);
    }
}