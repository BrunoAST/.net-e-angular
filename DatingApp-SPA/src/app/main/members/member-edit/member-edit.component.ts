import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from 'src/app/models/user.model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'da-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  user: User;
  form: FormGroup;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.form.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this._buildForm();
    this._loadUserData();
  }

  updateUser(): void {
    const formValue = this.form.value;

    this.userService
      .updateUser(this.authService.decodedToken.nameid, formValue)
      .subscribe(
        () => {
          this.alertify.success('Perfil atualizado com sucesso');
          this.form.reset(formValue);
        },
        (err: HttpErrorResponse) => this.alertify.error(err.toString())
      );
  }

  private _loadUserData(): void {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this._initForm(this.user);
    });
  }

  private _buildForm(): void {
    this.form = this.formBuilder.group({
      introdoction: [null, [Validators.required]],
      lookingFor: [null, [Validators.required]],
      interests: [null, [Validators.required]],
      city: [null, [Validators.required]],
      country: [null, [Validators.required]]
    });
  }

  private _initForm(user: User): void {
    if (user) {
      this.form.get('introdoction').setValue(user.introdoction);
      this.form.get('lookingFor').setValue(user.lookingFor);
      this.form.get('interests').setValue(user.interests);
      this.form.get('city').setValue(user.city);
      this.form.get('country').setValue(user.country);
    }
  }
}
