import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesComponent } from './messages.component';
import { MessagesRoutesModule } from './messages.routes.module';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, MessagesRoutesModule]
})
export class MessagesModule {}
