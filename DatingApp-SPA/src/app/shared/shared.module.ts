import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BsDropdownModule,
  TabsModule,
  BsDatepickerModule
} from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    BsDatepickerModule,
    NgxGalleryModule,
    FileUploadModule
  ]
})
export class SharedModule {}
