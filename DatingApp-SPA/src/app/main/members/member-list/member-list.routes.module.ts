import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberListComponent } from './member-list.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MemberListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MemberListRoutesModule {}
