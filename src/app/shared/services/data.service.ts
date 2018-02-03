import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BadInputError,
  ERROR_CODE_BAD_INPUT,
  ERROR_CODE_NOT_FOUND,
  ERROR_CODE_UNPROCESSABLE_ENTITY,
  NotFoundError,
  UnprocessableEntity,
} from 'common/index';
import { AppError } from 'common/errors/app.error';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(
    public http: HttpClient
  ) { }

  get(route: string) {
    return this.http.get(route).catch(this.handleErrorCatch);
  }

  post(route: string, payload: any) {
    return this.http.post(route, payload).catch(this.handleErrorCatch);
  }

  delete(route: string, payload: any) {
    return this.http.delete(route).catch(this.handleErrorCatch);
  }

  put(route: string, payload: any) {
    return this.http.put(route, payload).catch(this.handleErrorCatch);
  }

  private handleErrorCatch(error: Response) {

    if (this.isStatusErrorBadInput(error)) { return Observable.throw(new BadInputError(error.json())); }

    if (this.isStatusErrorNotFound(error)) { return Observable.throw(new NotFoundError(error.json())); }

    if (this.isStatusErrorUnprocessableEntity(error)) { return Observable.throw(new UnprocessableEntity(error.json())); }

    return Observable.throw(new AppError(error.json()));
  }

  private isStatusErrorBadInput(error: Response) { return error.status === ERROR_CODE_BAD_INPUT; }

  private isStatusErrorNotFound(error: Response) { return error.status === ERROR_CODE_NOT_FOUND; }

  private isStatusErrorUnprocessableEntity(error: Response) { return error.status === ERROR_CODE_NOT_FOUND; }
}
