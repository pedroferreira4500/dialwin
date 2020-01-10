import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DwinSharedModule } from 'app/shared/shared.module';
import { CentroSaudeComponent } from './centro-saude.component';
import { CentroSaudeDetailComponent } from './centro-saude-detail.component';
import { CentroSaudeUpdateComponent } from './centro-saude-update.component';
import { CentroSaudeDeleteDialogComponent } from './centro-saude-delete-dialog.component';
import { centroSaudeRoute } from './centro-saude.route';

@NgModule({
  imports: [DwinSharedModule, RouterModule.forChild(centroSaudeRoute)],
  declarations: [CentroSaudeComponent, CentroSaudeDetailComponent, CentroSaudeUpdateComponent, CentroSaudeDeleteDialogComponent],
  entryComponents: [CentroSaudeDeleteDialogComponent]
})
export class DwinCentroSaudeModule {}
