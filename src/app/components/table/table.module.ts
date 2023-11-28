import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

import { NgZorroAntdModule } from '../../imports/ng-zorro-antd.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
