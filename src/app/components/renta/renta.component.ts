import { Component, OnInit } from '@angular/core';
import { InterfaceService } from '../../services/interface.service'
import { Router } from '@angular/router';
import { EnviarRentaService } from '../../services/enviar-renta.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { InterceptorService } from '../../services/interceptor.service';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class RentaComponent implements OnInit {
  json: any;
  rut: string;
  email: String;
  celular: string; 
  formRenta: FormGroup;
  renta:  any;
  deviceInfo = null;
  browser: string; 
  os: string; 
  constructor( private interface1: InterfaceService, private router:Router,  public fb: FormBuilder,
              private rentaService: EnviarRentaService, private deviceService: DeviceDetectorService,
              private interceptor: InterceptorService ) {

    this.formRenta = this.fb.group({
      renta: ['', [Validators.required]]
    });
   }

   get f() { return this.formRenta.controls; }
  
   ngOnInit() { 
    try{
      this.json = JSON.parse(this.interface1.jsoncliente$);
      this.rut = this.json.rut;
      this.email = this.json.email;
      this.celular = this.json.celular;
    } catch(e) {
      console.log(e); 
    }  
  }

  validarDatos(){
    if (this.rut == '' || this.email=='' || this.renta == '' || this.celular ==''){
      return false;
    }else{
      return true;
    }
  }

  enviar(){
    try {
      if (this.validarDatos()){
        this.renta = {
          rut	: this.rut,
          celular	: this.celular,
          email	: this.email,
          renta: this.formRenta.value.renta
        }
    
        this.rentaService.insertRenta(this.renta).subscribe( async(resultado: Text)=>{
           console.log(resultado)
            this.json = JSON.stringify(resultado)
           alert(this.json)
        }
        )
      }else{
        alert('Uno o mas datos se encuentran vacíos');
        this.router.navigate(['']);
      }
    } catch(e) {
      console.log(e); 
    }
  }
}
   
