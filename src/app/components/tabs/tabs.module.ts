import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

import { NgZorroAntdModule } from '../../imports/ng-zorro-antd.module';

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
