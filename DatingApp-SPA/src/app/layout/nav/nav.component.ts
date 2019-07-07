import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'da-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this._buildForm();
  }

  login(): void {
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.alertify.success('Logged in Successfully');
        this.loginForm.reset();
      },
      (err: HttpErrorResponse) => this.alertify.error(err.toString())
    );
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

  private _buildForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.maxLength(8)]]
    });
  }
}
