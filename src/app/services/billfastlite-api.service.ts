import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class billFastLiteApiUrl {
    private billFastLiteApiUrl = "https://localhost:44392/api";
    constructor(private http: HttpClient){}

    // login 
    getUser():Observable<any[]>{
        return this.http.get<any>(this.billFastLiteApiUrl + '/logins');
    }
    addUser(data: any){
        return this.http.post(this.billFastLiteApiUrl + '/logins', data);
    }
    updateUser(id: number|string, data:any){
        return this.http.put(this.billFastLiteApiUrl + `/logins/${id}`, data);
    }
    deleteUser(id:number|string){
        return this.http.delete(this.billFastLiteApiUrl + `/logins/${id}`);
    }
    // Clientes
    getClient():Observable<any>{
        return this.http.get(this.billFastLiteApiUrl + '/client');
    }
    addClient(client: any): Observable<any> {
        return this.http.post(this.billFastLiteApiUrl + '/client', client);
    }
    updateClient(id: number,cliente: any): Observable<any>{
        return this.http.put(this.billFastLiteApiUrl + `/client/${id}`, cliente);
    }
    deleteClient(idCliente : number): Observable<any> {
        return this.http.delete(this.billFastLiteApiUrl + `/client/${idCliente}`);
    }
    // Productos 

    getProduct():Observable<any[]>{
        return this.http.get<any>(this.billFastLiteApiUrl + '/productos');
    }
    addProduct(data: any){
        return this.http.post(this.billFastLiteApiUrl + '/productos', data);
    }
    updateProduct(id: number|string, data:any){
        return this.http.put(this.billFastLiteApiUrl + `/productos/${id}`, data);
    }
    deleteProduct(id:number|string){
        return this.http.delete(this.billFastLiteApiUrl + `/productos/${id}`);
    }
    // Facturas
    getBills():Observable<any[]>{
        return this.http.get<any>(this.billFastLiteApiUrl + '/facturas');
    }
    addBills(data: any){
        return this.http.post(this.billFastLiteApiUrl + '/facturas', data);
    }
    // Detalles facturas
    getBillDetail():Observable<any[]>{
        return this.http.get<any>(this.billFastLiteApiUrl + '/detallefacturas');
    }
    addBillDetail(data: any){
        return this.http.post(this.billFastLiteApiUrl + '/detallefacturas', data);
    }
    updateBillDetail(id: number|string, data:any){
        return this.http.put(this.billFastLiteApiUrl + `/detallefacturas/${id}`, data);
    }
    deleteBillDetail(id:number|string){
        return this.http.delete(this.billFastLiteApiUrl + `/detallefacturas/${id}`);
    }
    // Categoria producto
    getProductCategory():Observable<any[]>{
        return this.http.get<any>(this.billFastLiteApiUrl + '/categoriaproductos');
    }
    addProductCategory(data: any){
        return this.http.post(this.billFastLiteApiUrl + '/categoriaproductos', data);
    }
    updateProductCategory(id: number|string, data:any){
        return this.http.put(this.billFastLiteApiUrl + `/categoriaproductos/${id}`, data);
    }
    deleteProductCategory(id:number|string){
        return this.http.delete(this.billFastLiteApiUrl + `/categoriaproductos/${id}`);
    }
     // Tipo de comprobante fiscal
     getTaxReceiptType():Observable<any[]>{
        return this.http.get<any>(this.billFastLiteApiUrl + '/TipoDeComprobanteFiscal');
    }
}