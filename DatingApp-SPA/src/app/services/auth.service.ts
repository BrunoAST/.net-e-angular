import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

import { baseAPI } from 'src/routes/api.routes';
import { RegisterModel } from '../models/register.model';
import { UserTokenInformationModel } from '../models/user-token-information.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();
  public decodedToken: UserTokenInformationModel;

  constructor(private http: HttpClient) {}

  login(model: any): Observable<void> {
    return this.http.post(`${baseAPI}/auth/login`, model).pipe(
      map((user: any) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      })
    );
  }

  register(model: RegisterModel): Observable<any> {
    return this.http.post(`${baseAPI}/auth/register`, model);
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
