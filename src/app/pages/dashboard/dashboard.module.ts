import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { NgZorroAntdModule } from '../../imports/ng-zorro-antd.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    NgZorroAntdModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
