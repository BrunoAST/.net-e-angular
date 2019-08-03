import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberEditComponent } from './member-edit.component';
import { PreventUnsavedChangesGuard } from 'src/app/core/guards/prevent-unsaved-changes.guard';

const ROUTES: Routes = [
  {
    path: '',
    component: MemberEditComponent,
    canDeactivate: [PreventUnsavedChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MemberEditRoutesModule {}
