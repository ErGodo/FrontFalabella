import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {
  private jsoncliente = new Subject<string>();
  public jsoncliente$ : string;
  constructor() { }

  getCliente(message: string){
    this.jsoncliente$ = message;
}
}
