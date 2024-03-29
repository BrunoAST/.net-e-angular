import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MemberEditComponent } from './member-edit.component';
import { MemberEditRoutesModule } from './member-edit.routes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PhotoEditorModule } from '../photo-editor/photo-editor.module';

@NgModule({
  declarations: [MemberEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MemberEditRoutesModule,
    SharedModule,
    PhotoEditorModule
  ]
})
export class MemberEditModule {}
