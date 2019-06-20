import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValueComponent } from './value.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ValueComponent],
  exports: [ValueComponent]
})
export class ValueModule {}
