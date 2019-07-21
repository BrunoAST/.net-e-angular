import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberCardComponent } from './member-card.component';
import { MemberCardRoutesModule } from './member-card.routes.module';

@NgModule({
  declarations: [MemberCardComponent],
  imports: [CommonModule, MemberCardRoutesModule],
  exports: [MemberCardComponent]
})
export class MemberCardModule {}
