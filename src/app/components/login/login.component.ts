import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarios: any[] = [];
  usuariosAdmin: any[] = [];
  loginUsuario: FormGroup;
  submitted = false;
  validLogin = false;
  constructor(private fb: FormBuilder, private router:Router){
    this.loginUsuario = this.fb.group({
      email:['', Validators.required],
      pass:['', Validators.required]
    })
    this.validLogin = true;
  }
  ngOnInit(): void {
  }
  iniciarSesion(email: string, pass: string){
    /*this.submitted = true;
    if(this.loginUsuario.invalid){
      return;
    }
    if(this.usuarios[0].Correo == email){
      if(this.usuarios[0].Contraseña == pass){
        this.validLogin = true;
        sessionStorage.setItem('idUsuario', this.usuarios[0].id);
        this.router.navigate(['/pagprincipaladmin']);      
      } else {
        this.validLogin = false;
      }    
    } else {        
        if(this.usuariosAdmin[0].Correo == email){
          if(this.usuariosAdmin[0].Contraseña == pass){
            this.validLogin = true;
            sessionStorage.setItem('idUsuario', this.usuarios[0].id);
            this.router.navigate(['/pagprincipal']);      
          } else {
            this.validLogin = false;
          }    
        } else {
          this.validLogin = false;
        }
    }*/
  }
}
