import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { Personas } from 'src/app/core/model/personas';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  listaUser: Personas [] =[];
  logueado: boolean = false;

   constructor( private _AuthService: AuthService){
   }

   ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.logueado = true;
      
      
    }else{

      return
    }

      this.cargarUsers()
   }
   cargarUsers(){

    this._AuthService.getPersonas().subscribe( resp=> {this.listaUser=resp;
      
      console.log("listaxxxx:",this.listaUser);})

   }

   deleteUser(id:number){
    
//     this._AuthService.deleteUser(id).subscribe({next :resp=>{

//       console.log("respuesta del servidor",resp)
//       Swal.fire("Exito",'Se Elimino Existosamente','success')
//       this.cargarUsers();
    

// },
// error:error=>{
// Swal.fire("Error",error,'error')
      
//       console.log("Hubo un error!",error)
//     }
  
  
//   })

   }


}
