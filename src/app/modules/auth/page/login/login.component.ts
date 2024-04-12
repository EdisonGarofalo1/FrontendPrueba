import { Component } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';
import { User } from 'src/app/core/model/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(private _router:Router, private _AuthService:AuthService,private FB: FormBuilder){


    
  this.loginForm= this.FB.group({
  
 
    username:['Juanperesrr1',[Validators.required]],
    password:['123ww22132132E@',[Validators.required]],
    
  
  })



  }



 
  // usuario:User={
  //   username: 'Juanperesrr1',
  //   password: '123ww22132132E@'
  // }
  login(){

    if (this.loginForm.valid) {
    

      console.log(this.loginForm.value.username,this.loginForm.value.password);
     this._AuthService.login(this.loginForm.value.username,this.loginForm.value.password).subscribe(res =>{
   console.log("respssss",res)
      if(res.password !==null){

        localStorage.setItem('token', res.password! );
        this._router.navigateByUrl('/home');
        console.log("si  igreos")
      
       
        
        } else {
          Swal.fire('Error', res.message, 'error');
        }

     } )

    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos.'
      });
    }
    
  }


  recuperar(){
    this._router.navigateByUrl('/auth/password');
  }
}
