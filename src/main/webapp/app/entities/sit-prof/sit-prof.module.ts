import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DwinSharedModule } from 'app/shared/shared.module';
import { SitProfComponent } from './sit-prof.component';
import { SitProfDetailComponent } from './sit-prof-detail.component';
import { SitProfUpdateComponent } from './sit-prof-update.component';
import { SitProfDeleteDialogComponent } from './sit-prof-delete-dialog.component';
import { sitProfRoute } from './sit-prof.route';

@NgModule({
  imports: [DwinSharedModule, RouterModule.forChild(sitProfRoute)],
  declarations: [SitProfComponent, SitProfDetailComponent, SitProfUpdateComponent, SitProfDeleteDialogComponent],
  entryComponents: [SitProfDeleteDialogComponent]
})
export class DwinSitProfModule {}
