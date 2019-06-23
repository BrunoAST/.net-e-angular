import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutesModule } from './main.routes.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [CommonModule, MainRoutesModule, HomeModule],
  exports: [MainRoutesModule, HomeModule]
})
export class MainModule {}
