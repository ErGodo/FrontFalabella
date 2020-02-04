import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { InterfaceService } from '../../services/interface.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  formLanding: FormGroup;
  constructor(private router: Router,  public fb: FormBuilder, public interface1: InterfaceService) {

    this.formLanding = this.fb.group({
      rut: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
   }

   // convenience getter for easy access to form fields
   get f() { return this.formLanding.controls; }

  ngOnInit() {
  }

  renta(){
    try{
      this.interface1.getCliente(JSON.stringify({ rut: this.formLanding.value.rut, 
        celular: this.formLanding.value.celular,
        email: this.formLanding.value.email  }))
  
      this.router.navigate(['/renta']);
    } catch(e) {
      console.log(e); 
    }
  }
}
