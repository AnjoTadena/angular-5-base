import { Injectable, Injector } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { LoggerService } from 'shared/services';
import { PathLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error) {
    // const err = error.error;
    console.log('GlobalErrorService | error', error.error);

    const loggingService = this.injector.get(LoggerService);

    const location = this.injector.get(LoggerService);

    const message = error.message ? error.message : error.toString();

    // console.log('GlobalErrorService | location', location);

    const url = location instanceof PathLocationStrategy ? location.path() : '';

    try {
      /**
       * get the stack trace
       * 10 stacks
      **/
      StackTrace.fromError(error).then(stackframes => {
        const stackString = stackframes.splice(0, 20).map(stackFrame => stackFrame.toString()).join('\n');

        /**
         * log error
         **/
        loggingService.error({ message, url, stack: stackString });
      });
    } catch (e) {
      loggingService.error(e);

      // loggingService.error({ message, url, stack: stackString });
    }

    throw error;
  }

}
