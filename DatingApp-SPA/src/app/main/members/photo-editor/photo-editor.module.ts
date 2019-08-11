import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoEditorComponent } from './photo-editor.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PhotoEditorComponent],
  imports: [CommonModule, SharedModule],
  exports: [PhotoEditorComponent]
})
export class PhotoEditorModule {}
