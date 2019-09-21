import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BsDropdownModule,
  TabsModule,
  BsDatepickerModule,
  PaginationModule,
  ButtonsModule
} from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [TimeAgoPipe],
  exports: [
    BsDropdownModule,
    TabsModule,
    BsDatepickerModule,
    NgxGalleryModule,
    FileUploadModule,
    TimeAgoPipe,
    PaginationModule,
    ButtonsModule
  ]
})
export class SharedModule {}
