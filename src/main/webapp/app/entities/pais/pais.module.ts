import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DwinSharedModule } from 'app/shared/shared.module';
import { PaisComponent } from './pais.component';
import { PaisDetailComponent } from './pais-detail.component';
import { PaisUpdateComponent } from './pais-update.component';
import { PaisDeleteDialogComponent } from './pais-delete-dialog.component';
import { paisRoute } from './pais.route';

@NgModule({
  imports: [DwinSharedModule, RouterModule.forChild(paisRoute)],
  declarations: [PaisComponent, PaisDetailComponent, PaisUpdateComponent, PaisDeleteDialogComponent],
  entryComponents: [PaisDeleteDialogComponent]
})
export class DwinPaisModule {}
