import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'shared/services/data.service';
import { Api } from 'app/common';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor() {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();

    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

  // login(data: any) {
  //   return this.post(Api.login, data).map((response: any) => response);
  // }
}
