import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { baseAPI } from 'src/routes/api.routes';
import { PaginatedResult } from '../models/pagination.interface';
import { IFilterParams } from '../models/filter-params';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(page?, itemsPerPage?, userParams?: IFilterParams): Observable<PaginatedResult<User[]>> {
    const paginatedResult = new PaginatedResult<User[]>();
    let params = new HttpParams();

    if (page !== null && itemsPerPage !== null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (userParams != null) {
      params = params.append('minAge', userParams.minAge.toString());
      params = params.append('maxAge', userParams.maxAge.toString());
      params = params.append('gender', userParams.gender);
      params = params.append('orderBy', userParams.orderBy);
    }

    return this.http.get<User[]>(`${baseAPI}/users`, { observe: 'response', params }).pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
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
