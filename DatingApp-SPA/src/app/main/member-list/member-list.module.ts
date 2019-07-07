import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberListComponent } from './member-list.component';
import { MemberListRoutesModule } from './member-list.routes.module';

@NgModule({
  declarations: [MemberListComponent],
  imports: [CommonModule, MemberListRoutesModule]
})
export class MemberListModule {}
