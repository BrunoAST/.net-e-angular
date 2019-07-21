import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot(), TabsModule.forRoot(), NgxGalleryModule],
  exports: [BsDropdownModule, TabsModule, NgxGalleryModule]
})
export class SharedModule {}
