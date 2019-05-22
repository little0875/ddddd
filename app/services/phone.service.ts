import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  apiUrl : string = "http://localhost/MOBILE/process/crud_cateactivity.php";
  constructor(public http: HttpClient) 
  { }

  getPhone(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(mb_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'mb_id' : mb_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( mb_name: string, mb_brand: string){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'mb_name': mb_name,
      'mb_brand': mb_brand
      
      
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( mb_name : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'mb_name' : mb_name
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( mb_id: any , mb_name: string, mb_brand:any	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'mb_id' : mb_id ,
      'mb_name': mb_name,
      'mb_brand': mb_brand
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}