import { Component } from '@angular/core';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { User } from 'src/app/core/model/User';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  constructor(private _router:Router, private _AuthService:AuthService){}
  usuario:User={
    usernameOrEmail: 'johnd',
    password: ''
  }
  recuperar(){

console.log(this.usuario.usernameOrEmail,this.usuario.password);
     this._AuthService.getpassword(this.usuario.usernameOrEmail!).subscribe(res =>{
   console.log("resp",res)
      if(res.password !==null){
        
        Swal.fire({
          icon: 'success',
          title: 'Recuperación Exitosa',
          html: `Contraseña recuperada: <strong>${res.password}</strong>`
        });

        } else {
          Swal.fire('Error', res.message, 'error');
        }

     } )
    
  }

  Longi(){

  this._router.navigateByUrl('/auth/login');

}
}
