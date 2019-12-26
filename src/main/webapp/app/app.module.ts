import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DwinSharedModule } from 'app/shared/shared.module';
import { DwinCoreModule } from 'app/core/core.module';
import { DwinAppRoutingModule } from './app-routing.module';
import { DwinHomeModule } from './home/home.module';
import { DwinEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DwinSharedModule,
    DwinCoreModule,
    DwinHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DwinEntityModule,
    DwinAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class DwinAppModule {}
