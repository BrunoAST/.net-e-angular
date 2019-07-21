import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberDetailComponent } from './member-detail.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MemberDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MemberDetailRoutesModule {}
