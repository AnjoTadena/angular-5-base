import { DataService } from 'shared/services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private data: DataService) { }

  getAll() {
    return this.data.get('http://demo.envogue.global:8080/api/products').map((dataResponse) => {
      console.log('dataResponse', dataResponse);
      return dataResponse;
    });
  }
}
