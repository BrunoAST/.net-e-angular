import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

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
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertify: AlertifyService,
    private localeService: BsLocaleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    defineLocale('pt-br', ptBrLocale);
    this.localeService.use('pt-br');

    this.bsConfig = {
      containerClass: 'theme-red'
    };

    this._buildForm();
  }

  register(): void {
    if (this.registerForm.valid) {
      const user = Object.assign({}, this.registerForm.getRawValue());

      this.authService
        .register(user)
        .subscribe(
          () => this.alertify.success('Registro realizado com sucesso!'),
          (err: HttpErrorResponse) => this.alertify.error(err.error),
          () =>
            this.authService
              .login(user)
              .subscribe(() => this.router.navigate(['/members']))
        );
    }
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }

  private _passwordMatchValidator(field: FormGroup) {
    return field.get('password').value === field.get('confirmPassword').value
      ? null
      : { mismatch: true };
  }

  private _buildForm(): void {
    this.registerForm = this.formBuilder.group(
      {
        gender: ['male'],
        username: [null, [Validators.required]],
        knownAs: [null, [Validators.required]],
        dateOfBirth: [null, [Validators.required]],
        city: [null, [Validators.required]],
        country: [null, [Validators.required]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8)
          ]
        ],
        confirmPassword: [
          null,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8)
          ]
        ]
      },
      { validator: this._passwordMatchValidator }
    );
  }
}
