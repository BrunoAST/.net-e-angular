import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberDetailComponent } from './member-detail.component';
import { MemberDetailRoutesModule } from './member-detail.routes.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MemberDetailComponent],
  imports: [CommonModule, MemberDetailRoutesModule, SharedModule]
})
export class MemberDetailModule {}
