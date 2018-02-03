import { Injectable } from '@angular/core';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { AuthService } from 'auth/services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                // Authorization: `Bearer ${this.auth.getToken()}`
                // tslint:disable-next-line:max-line-length
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYyMzM3NjRlN2UwMjFiMjU3NTdkYjQyYjZiNjJmZTFhYjRkY2ZiNmU3NTI3NWQ0MmRhZjA0ZTk1NDM2OGU4Mjk2YjBmMGI5ZjJhNzA4Y2UxIn0.eyJhdWQiOiIxIiwianRpIjoiNjIzMzc2NGU3ZTAyMWIyNTc1N2RiNDJiNmI2MmZlMWFiNGRjZmI2ZTc1Mjc1ZDQyZGFmMDRlOTU0MzY4ZTgyOTZiMGYwYjlmMmE3MDhjZTEiLCJpYXQiOjE1MTc0ODE2OTQsIm5iZiI6MTUxNzQ4MTY5NCwiZXhwIjoxNTQ5MDE3Njk0LCJzdWIiOiI4OCIsInNjb3BlcyI6W119.p4TMNYXHJ1RpEassDutCEmiR-GdBJI5mMzk-zugF6I8xhsc5L_FWoKXz5xb2sq5gmHbXDZM2tTL73Jehk4ykfEeJsqhAAAun-EkkeFP7SNHqZxLI_aMOy0CYsA-6NOdT0BD3L442Jf-PcHYKExzro8aJ5P5k2Bn7BjEfipRU1qHdKtv7NYnn-JniTDafWOM7GYXQbAd2R0B8h7-3KMuKA5f0D9DgbuuGSlPqQjNlUfqSrSFlSylhuTkWh40D5KRah5Lj2p0td-p6Kx3UK0NL0oeVuxs4rAdcelsVm71tQMyVPOn2JRBpdlan5min5a0vzpK23dctMzzYLezWsO24nIuuW8F4z0PZXPbadkKIXuuLwcLhp4wFLyKhLyDNGMTt16_RG0XQJtgVIFAFDS2Q0nzEwBGs78bJl-qZGlNcGPs8oDanL5FymEoBHS35iD4IUtk0up5WupyDezi4-53uww80rzGNkJXZ-_BX5R8zeI0oo-TTpnAB9no4Kil2arkRxCZls0Qp4D8RoTCgPiGda0-Ho6adiA0-H4IyJEluYI5aJ5ZpCm2EhUgJd0PpKeD3ud7j8bDu4BfIVlSo6tlVK0BMNU1TFoVrOM6Kc66oXcOuStkYTQftAiAVmSot6DlCn52jDF2FBmjcNIgUvEOJFn4MWj4F21HUTY_7x_35OoQ`
            }
        });
        return next.handle(request);
    }
}
