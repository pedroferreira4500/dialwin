import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DwinSharedModule } from 'app/shared/shared.module';
import { DoenteIdentidadeComponent } from './doente-identidade.component';
import { DoenteIdentidadeDetailComponent } from './doente-identidade-detail.component';
import { DoenteIdentidadeUpdateComponent } from './doente-identidade-update.component';
import { DoenteIdentidadeDeleteDialogComponent } from './doente-identidade-delete-dialog.component';
import { doenteIdentidadeRoute } from './doente-identidade.route';

@NgModule({
  imports: [DwinSharedModule, RouterModule.forChild(doenteIdentidadeRoute)],
  declarations: [
    DoenteIdentidadeComponent,
    DoenteIdentidadeDetailComponent,
    DoenteIdentidadeUpdateComponent,
    DoenteIdentidadeDeleteDialogComponent
  ],
  entryComponents: [DoenteIdentidadeDeleteDialogComponent]
})
export class DwinDoenteIdentidadeModule {}
