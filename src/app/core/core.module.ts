import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent, 
  P404Component, 
  P500Component,
  HomeComponent,
  HeaderComponent 
} from 'app/core/components';
import { UserService } from 'core/services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    HeaderComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    P404Component,
    P500Component,
    LoginComponent,
    HomeComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
