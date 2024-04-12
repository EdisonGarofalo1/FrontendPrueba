import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  
  fromAuth: FormGroup;


  constructor( private FB:FormBuilder, private _ActivatedRoute:ActivatedRoute, private _AuthService:AuthService, private _Router:Router){

  
  
  
    this.fromAuth= this.FB.group({
      idPersona:['',[Validators.required]],

      nombres:[''],
      apellidos:['',[Validators.required]],
      identificacion:['',[Validators.required, Validators.maxLength(15), Validators.minLength(3)]],
     
      fechaNacimiento:['',[Validators.required]],

  
      
     


    })

  }

 

  ngOnInit(): void {

    if(!this._Router.url.includes('edit')){
  
      return;
  
    }

    this._ActivatedRoute.params.pipe(
      switchMap(({id})=> this._AuthService.getPersonasid(id))).subscribe( { next:resp=> {
      
      console.log("seee",resp)
  
      this.fromAuth.patchValue(resp)
  console.log("fromula",this.fromAuth)
      // this.fromProducto.setValue( {
      //   id:resp.id,
      //   nombre: resp.nombre,
      //   precio: resp.precio,
      //   categorias: resp.categorias,
      //     estado: resp.estado,
      // });
   
    },error:error=>{
      Swal.fire("Error",error,'error')
            
            console.log("Hubo un error!",error)
          }


    
         } )

  }
  Guardar(){
//     if(this.fromAuth.value.id){
//       console.log("estoy editado");
//       this._AuthService.updateUser(this.fromAuth.value.id,this.fromAuth.value).subscribe({
//          next:resp=>{ console.log(resp)
//           console.log("respuesta del servidor",resp)
//           Swal.fire("Exito",'Los Datos se Actualizao Corretamente','success')
//           this._Router.navigate(['/auth/auth/auth-list']);
//         },error:error=>{
//     Swal.fire("Error",error,'error')
          
//           console.log("Hubo un error!",error)
//         }
    
    
//     })
         
    
//     }else{
     
//      this._AuthService.createUser(this.fromAuth.value).subscribe({ next:resp=> 
//       {
        
//         console.log("respuesta del servidor",resp)
//         Swal.fire("Exito",'Los Datos se Registro Corretamente','success')
//         this._Router.navigate(['/auth/auth/auth-list']);
 
//  },
//  error:error=>{
//   Swal.fire("Error",error,'error')
        
//         console.log("Hubo un error!",error)
//       }
//     }
//       )
//          }
     

  }


  salir(){
  this._Router.navigate(['/auth/auth/list'])

    }
 
}
