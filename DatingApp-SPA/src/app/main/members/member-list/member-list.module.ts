import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MemberListComponent } from './member-list.component';
import { MemberListRoutesModule } from './member-list.routes.module';
import { MemberCardModule } from '../member-card/member-card.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MemberListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MemberListRoutesModule,
    MemberCardModule,
    SharedModule
  ]
})
export class MemberListModule {}
