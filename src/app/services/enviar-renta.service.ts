import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { RentaI } from '../models/renta-interface'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnviarRentaService {

  constructor(private httpClient: HttpClient) { }
  renta: RentaI;
  urlApi = "http://localhost:3000/api/renta"
  
  insertRenta(renta: RentaI):Observable<any>{
    let json = JSON.stringify(renta);
    let params = "renta="+json;
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.httpClient.post(this.urlApi, renta, { headers: headers});
  }
}
