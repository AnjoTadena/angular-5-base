import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'shared/services';

@Injectable()
export class UserService extends DataService {

  constructor(http: HttpClient) {
    super('http://demo.envogue.global:8080/api/products', http);
  }

  getUsers() {
    return this.get().map((dataResponse) => {
      console.log('dataResponse', dataResponse);
      return dataResponse;
    });
  }
}
