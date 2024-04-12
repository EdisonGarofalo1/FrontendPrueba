import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component'



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
