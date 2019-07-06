import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutesModule } from './main.routes.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptorProvider } from '../core/error.interceptor';

@NgModule({
  imports: [CommonModule, MainRoutesModule, HomeModule],
  exports: [MainRoutesModule, HomeModule],
  providers: [ErrorInterceptorProvider]
})
export class MainModule {}
