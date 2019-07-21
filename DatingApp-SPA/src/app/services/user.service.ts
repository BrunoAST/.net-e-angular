import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { baseAPI } from 'src/routes/api.routes';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseUrl = baseAPI;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }
}
