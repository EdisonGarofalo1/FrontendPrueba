import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/service/auth.service';


@Injectable({
    providedIn: 'root'
  })
  export class ValidarTokenGuard implements CanActivate, CanLoad {

    constructor(private _AuthService:AuthService, private router:Router ){
    }
    canActivate(): Observable<boolean> | boolean {
        return this._AuthService.validarToken()
                .pipe(
                  tap( valid => {
                    console.log("lo que trae CanActivate:", valid)
                    if ( !valid ) {
                      this.router.navigateByUrl('/auth/login');
                    }
                  })
                );
      }    
      canLoad(): Observable<boolean> | boolean {
        return this._AuthService.validarToken()
          .pipe(
            tap( valid => {
              console.log("lo que trae CanActivate:", valid)
              if ( !valid ) {
                this.router.navigateByUrl('/auth/login');
              }
            })
          );
      }

  }