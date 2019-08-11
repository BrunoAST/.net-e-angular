import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { baseAPI } from 'src/routes/api.routes';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseAPI}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${baseAPI}/users/${id}`);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${baseAPI}/users/${id}`, user);
  }

  deletePhoto(userId: number, id: number): Observable<any> {
    return this.http.delete<any>(`${baseAPI}/users/${userId}/photos/${id}`);
  }

  setMainPhoto(userId: number, id: number): Observable<boolean> {
    return this.http.post<boolean>(`${baseAPI}/users/${userId}/photos/${id}/setMain`, {});
  }
}
