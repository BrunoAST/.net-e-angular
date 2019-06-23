import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { baseAPI } from 'src/routes/api.routes';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(model: any): Observable<void> {
    return this.http.post(`${baseAPI}/auth/login`, model).pipe(
      map((user: any) => {
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  register(model: RegisterModel): Observable<any> {
    return this.http.post(`${baseAPI}/auth/register`, model);
  }
}
