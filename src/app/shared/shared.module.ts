import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, LoggerService } from 'shared/services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    DataService,
    LoggerService
  ]
})
export class SharedModule { }
