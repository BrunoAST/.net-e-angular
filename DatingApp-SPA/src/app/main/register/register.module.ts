import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [RegisterComponent]
})
export class RegisterModule {}
