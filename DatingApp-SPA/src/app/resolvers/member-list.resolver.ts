import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({ providedIn: 'root' })
export class MemberListResolver implements Resolve<User[]> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(): Observable<User[]> {
    return this.userService.getUsers().pipe(
      catchError(() => {
        this.alertify.error('Erro ao recuperar os dados');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
