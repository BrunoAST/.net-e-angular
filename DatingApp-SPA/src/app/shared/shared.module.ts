import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot(), TabsModule.forRoot(), NgxGalleryModule],
  exports: [BsDropdownModule, TabsModule, NgxGalleryModule, FileUploadModule]
})
export class SharedModule {}
