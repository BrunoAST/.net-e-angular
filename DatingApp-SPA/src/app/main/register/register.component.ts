import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { RegisterModel } from 'src/app/models/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'da-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this._buildForm();
  }

  register(): void {
    const data = this.registerForm.value as RegisterModel;
    this.authService
      .register(data)
      .subscribe(
        () => this.alertify.success('registration successful'),
        (err: HttpErrorResponse) => this.alertify.error(err.error)
      );
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }

  private _buildForm(): void {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.maxLength(8)]]
    });
  }
}
