import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {



  logueado:boolean=false;
  
  constructor(private _router:Router){

  

  }
  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.logueado = true;
      
    }
  }
  Salir(){

    localStorage.removeItem('token');
   
    this._router.navigate(['/login']);
  }

}
