import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberCardComponent } from './member-card.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MemberCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MemberCardRoutesModule {}
