import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { AuthResponse, User } from 'src/app/core/model/User';
import { Personas } from 'src/app/core/model/personas';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl: string = environment.baseUrl;
 

  constructor(private http:HttpClient ) { }

  
  private handleError(error:HttpErrorResponse){

    if(error.error instanceof ErrorEvent){
      console.error('Ocurrió un error:',error.error.message)


    }else {

      console.error(`El backend devolvió el código ${error.status}` +
      
      ` body era: ${error.error}`);

          }
          return throwError ('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.'

          );
    
  }
  // login(username:string, password:string):Observable<AuthResponse>{

  //      const url  = `${ this.baseUrl }sesion/login/`;
  //   const body = { username, password };

  //   return this.http.post<AuthResponse>( url, body )
  //     .pipe(
  //       tap( resp => {
  //         if ( resp.password ) {
  //           console.log("lo que trea el longin",resp.message)
           
  //         }
  //       }),
  //       map( resp => resp.message ),
  //       catchError( err => of(err.error.msg) )
  //     );
  
  // }



  // login(parametro1:string, parametro2:string): Observable<AuthResponse> {
  //   return this.http.post<any>(`${this.baseUrl}sesion/login`, credentials);
  // }

  
  login(param1: string, param2: number): Observable<any> {
    const url = `${this.baseUrl}/sesion/login`;
    let params = new HttpParams()
      .set('usernameOrEmail', param1)
      .set('password', param2);
    return this.http.post<any>(url, null, { params: params });
  }


  validarToken(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) {
      return of(false);
    }else{
      return of(true);

    }

  
  }



  getpassword(nombre:String):Observable<AuthResponse>{

  
  return this.http.get<AuthResponse>(`${this.baseUrl}sesion/password/${nombre}`).pipe(
      catchError(this.handleError)
  );
  }


  
  getPersonas():Observable<Personas[]>{

  
    return this.http.get<Personas[]>(`${this.baseUrl}persona/listar`).pipe(
        catchError(this.handleError)
    );
    }

    getPersonasid(id:number):Observable<Personas>{

  
      return this.http.get<Personas>(`${this.baseUrl}persona/ver/${id}`).pipe(
          catchError(this.handleError)
      );
      }
  
}
