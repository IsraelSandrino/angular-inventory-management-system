import { NgModule } from '@angular/core';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

import { NgZorroAntdModule } from '../../imports/ng-zorro-antd.module';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReportsRoutingModule,
    NgZorroAntdModule
  ],
  exports: [ReportsRoutingModule]
})
export class ReportsModule { }
