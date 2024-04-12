import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/shared/home/home.component';
import { ValidarTokenGuard } from './core/guards/auth.guard';

const routes: Routes = [

  { path:'auth',
  loadChildren:()=> import("./modules/auth/auth.module").then(m=> m.AuthModule)

 },
 
 {
     path:'home',
     component:HomeComponent,
     loadChildren:()=> import('./core/shared/shared.module').then(m=>m.SharedModule),
     canActivate:[ValidarTokenGuard],
     canLoad:[ValidarTokenGuard],
    
 },
 {
     path:'**',
     redirectTo:'auth',
    //  pathMatch: 'full'
 }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
