import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const apiKey = 'coinrankingbaf2785331b28f0cd09d4cdb170878902869adb9ddde7d81'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-My-custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthoService {
  private baseUrl =  'https://api.coinranking.com/v2/coins';
  private proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  
  
  constructor(private http: HttpClient) { }

  cryptoData(){
    const url = `${this.proxyUrl}${this.baseUrl}`

    return this.http.get(url,httpOptions).toPromise().then((data) =>{
      return data
      console.log();
      
    })
  }
  cryptoDato(){
    const url = `${this.proxyUrl}${this.baseUrl}`

    return this.http.get(url,httpOptions).toPromise().then((data) =>{
      return data
      console.log();
      
    })
  }
}
