import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

import { baseAPI } from 'src/routes/api.routes';
import { RegisterModel } from '../models/register.model';
import { UserTokenInformationModel } from '../models/user-token-information.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public decodedToken: UserTokenInformationModel;
  public currentUser: User;

  private jwtHelper = new JwtHelperService();
  private photoUrl = new BehaviorSubject<string>('assets/user.png');

  public currentPhotoUrl = this.photoUrl.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any): Observable<void> {
    return this.http.post(`${baseAPI}/auth/login`, model).pipe(
      map((user: any) => {
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.currentUser = user.user;
          this.changeMemberPhoto(this.currentUser.photoUrl);

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

  changeMemberPhoto(photoUrl: string): void {
    this.photoUrl.next(photoUrl);
  }
}
