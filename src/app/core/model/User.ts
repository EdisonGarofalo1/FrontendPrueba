export interface User {

    usernameOrEmail: string;
    password: string;
  

   
   
}

export interface AuthResponse{
    userName:string;
    mail: string;
    password: string;
    message: string;

}