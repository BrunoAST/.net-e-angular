import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavComponent } from './nav.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [NavComponent]
})
export class NavModule {}
