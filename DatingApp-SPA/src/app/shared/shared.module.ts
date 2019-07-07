import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot()],
  exports: [BsDropdownModule]
})
export class SharedModule {}
