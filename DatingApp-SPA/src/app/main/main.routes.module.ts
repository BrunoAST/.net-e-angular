import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { MemberDetailResolver } from '../resolvers/member-detail.resolver';
import { MemberListResolver } from '../resolvers/member-list.resolver';
import { MemberEditResolver } from '../resolvers/member-edit.resolver';
import { PreventUnsavedChangesGuard } from '../core/guards/prevent-unsaved-changes.guard';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'members',
        loadChildren: './members/member-list/member-list.module#MemberListModule',
        resolve: {
          users: MemberListResolver
        }
      },
      {
        path: 'members/:id',
        loadChildren: './members/member-detail/member-detail.module#MemberDetailModule',
        resolve: {
          user: MemberDetailResolver
        }
      },
      {
        path: 'member/edit',
        loadChildren: './members/member-edit/member-edit.module#MemberEditModule',
        resolve: {
          user: MemberEditResolver
        }
      },
      {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule'
      },
      {
        path: 'lists',
        loadChildren: './lists/lists.module#ListsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class MainRoutesModule {}
