import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists.component';
import { ListsRoutesModule } from './lists.routes.module';

@NgModule({
  declarations: [ListsComponent],
  imports: [CommonModule, ListsRoutesModule]
})
export class ListsModule {}
