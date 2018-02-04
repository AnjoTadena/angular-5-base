import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BadInputError, ERROR_CODE_BAD_INPUT, ERROR_CODE_NOT_FOUND, NotFoundError, UnprocessableEntity } from 'common/index';
import { AppError } from 'common/errors/app.error';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(
    public url: string,
    public http: HttpClient
  ) { }

  get(customUrl?) {
    const url = customUrl ? customUrl : this.url;

    return this.http.get(url).catch(this.handleErrorCatch);
  }

  getAll() {
    return this.http.get(this.url).catch(this.handleErrorCatch);
  }

  post(payload: any) {
    return this.http.post(this.url, payload).catch(this.handleErrorCatch);
  }

  delete(payload: any) {
    return this.http.delete(this.url).catch(this.handleErrorCatch);
  }

  put(payload: any) {
    return this.http.put(this.url, payload).catch(this.handleErrorCatch);
  }

  private handleErrorCatch(error: Response) {
    if (error.status === ERROR_CODE_BAD_INPUT) { return Observable.throw(new BadInputError(error)); }

    if (error.status === ERROR_CODE_NOT_FOUND) { return Observable.throw(new NotFoundError(error)); }

    if (error.status === ERROR_CODE_NOT_FOUND) { return Observable.throw(new UnprocessableEntity(error)); }

    return Observable.throw(new AppError(error));
  }
}
