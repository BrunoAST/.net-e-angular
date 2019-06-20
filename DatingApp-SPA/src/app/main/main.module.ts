import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutesModule } from './main.routes.module';

@NgModule({
  imports: [CommonModule, MainRoutesModule],
  exports: [MainRoutesModule]
})
export class MainModule {}
