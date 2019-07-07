import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RegisterModule } from '../register/register.module';
import { HomeRoutesModule } from './home.routes.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RegisterModule, HomeRoutesModule],
  exports: [HomeComponent]
})
export class HomeModule {}
