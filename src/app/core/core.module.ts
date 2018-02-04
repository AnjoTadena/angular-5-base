import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent, P404Component, P500Component } from 'app/core/components';
import { UserService } from 'core/services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent
  ],
  providers: [
    UserService
  ]
})
export class CoreModule { }
