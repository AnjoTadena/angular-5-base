import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'shared/services';

@Injectable()
export class UserService extends DataService {

  constructor(http: HttpClient) {
    super('', http);
  }

  getUsers() {
    return this.get().map((dataResponse) => {
      console.log('dataResponse', dataResponse);
      return dataResponse;
    });
  }
}
