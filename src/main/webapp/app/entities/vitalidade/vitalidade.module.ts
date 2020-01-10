import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DwinSharedModule } from 'app/shared/shared.module';
import { VitalidadeComponent } from './vitalidade.component';
import { VitalidadeDetailComponent } from './vitalidade-detail.component';
import { VitalidadeUpdateComponent } from './vitalidade-update.component';
import { VitalidadeDeleteDialogComponent } from './vitalidade-delete-dialog.component';
import { vitalidadeRoute } from './vitalidade.route';

@NgModule({
  imports: [DwinSharedModule, RouterModule.forChild(vitalidadeRoute)],
  declarations: [VitalidadeComponent, VitalidadeDetailComponent, VitalidadeUpdateComponent, VitalidadeDeleteDialogComponent],
  entryComponents: [VitalidadeDeleteDialogComponent]
})
export class DwinVitalidadeModule {}
