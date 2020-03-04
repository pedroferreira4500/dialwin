import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DialwinSharedModule } from '../../shared/shared.module';
import { DEMOGRAFIA_ROUTE } from './demografia.route';
import { DemografiaComponent } from './demografia.component';
import { SeletordoenteComponent } from '../seletordoente/seletordoente.component';
import { DemoidComponent} from '../demoid/demoid.component'
import { ContactosComponent } from '../contactos/contactos.component'
import { ContactosoutrosComponent } from '../contactosoutros/contactosoutros.component'


@NgModule({
  imports: [DialwinSharedModule, RouterModule.forChild([DEMOGRAFIA_ROUTE])],
  declarations: [DemografiaComponent, SeletordoenteComponent, DemoidComponent, ContactosComponent,ContactosoutrosComponent]
})
export class DialwinDemografiaModule {}