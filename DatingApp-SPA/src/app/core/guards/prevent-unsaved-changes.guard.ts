import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { MemberEditComponent } from 'src/app/main/members/member-edit/member-edit.component';

@Injectable({ providedIn: 'root' })
export class PreventUnsavedChangesGuard
  implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component: MemberEditComponent): boolean {
    if (component.form) {
      return confirm(
        'Tem certeza que deseja continuar? Qualquer informação não salva, será descartada!'
      );
    }
    return true;
  }
}
