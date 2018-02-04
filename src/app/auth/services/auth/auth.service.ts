import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { DataService } from 'shared/services';

@Injectable()
export class AuthService extends DataService {

  constructor(http: HttpClient) {
    super('http://demo.envogue.global:8080/api/login', http);
  }

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

  login() {
    this.post({
      email: 'anjo@coderepubliq.com',
      password: 'password'
    }).subscribe((response) => {
      const user = response.data;

      this.setAuthToken(user);

      this.setAuthUser(user);
    });
  }

  getAuthToken() {
    return localStorage.getItem('token');
  }

  getAuthUser() {
    return JSON.parse(localStorage.getItem('authUser'));
  }

  setAuthUser(user) {
    const userDetail = Object.assign({}, user);

    if (userDetail.hasOwnProperty('token')) { delete userDetail.token; }

    localStorage.setItem('authUser', JSON.stringify(userDetail));
  }

  private setAuthToken(user) {
    localStorage.setItem('token', user.token);
  }

  logout() {
    this.get().subscribe((response) => {
      // console.log('response', response);
      localStorage.removeItem('token');
    });
  }

}
