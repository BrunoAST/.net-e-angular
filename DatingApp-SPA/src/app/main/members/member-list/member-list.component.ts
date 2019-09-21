import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { IPagination, PaginatedResult } from 'src/app/models/pagination.interface';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { GenderListConst } from './constants/gender-list.const';

@Component({
  selector: 'da-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[] = [];
  user: User = JSON.parse(localStorage.getItem('user'));

  genderList = GenderListConst;
  pagination: IPagination;

  filterForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {
    this._buildForm();

    this.route.data.subscribe(data => {
      this.users = data.users.result;

      this.pagination = data.users.pagination;
    });

    this._initFormValues();
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;

    this._loadUsers();
  }

  filter(): void {
    this._loadUsers();
  }

  resetFilters(): void {
    this._initFormValues();

    this._loadUsers();
  }

  private _loadUsers(): void {
    this.userService
      .getUsers(
        this.pagination.currentPage,
        this.pagination.itemsPerPage,
        this.filterForm.getRawValue()
      )
      .subscribe(
        (res: PaginatedResult<User[]>) => {
          this.users = res.result;
          this.pagination = res.pagination;
        },
        (err: HttpErrorResponse) => this.alertify.error(err.toString())
      );
  }

  private _buildForm(): void {
    this.filterForm = this.formBuilder.group({
      minAge: [null],
      maxAge: [null],
      gender: [null],
      orderBy: [null]
    });
  }

  private _initFormValues(): void {
    this.filterForm.get('gender').setValue(this.user.gender === 'female' ? 'male' : 'female');
    this.filterForm.get('minAge').setValue(18);
    this.filterForm.get('maxAge').setValue(99);
    this.filterForm.get('orderBy').setValue('lastActive');
  }
}
