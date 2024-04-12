import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from 'src/app/core/shared/home/home.component';
import { ValidarTokenGuard } from 'src/app/core/guards/auth.guard';
import { ListComponent } from './page/list/list.component';
import { AddComponent } from './page/add/add.component';
import { PasswordComponent } from './page/password/password.component';




export const routes: Routes = [
  

  {
 path:'login',
 component: LoginComponent ,
  },

  {
    path:'password',
    component: PasswordComponent ,
     }
  ,{
  path:'auth',
  component: HomeComponent ,
  canActivate:[ValidarTokenGuard],
  canLoad:[ValidarTokenGuard],
  children: [
   { path: 'list', component: ListComponent },
   { path: 'create', component: AddComponent },
   { path: 'edit/:id', component: AddComponent },
   
 ]
 },
 
 { path: '**', redirectTo: 'login' }
 
 
 
       
 ]
 


 @NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
