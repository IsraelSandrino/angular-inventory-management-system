import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '../icons-provider.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  exports: [
    CommonModule,
    IconsProviderModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzTabsModule,
    NzButtonModule,
    NzTableModule
  ]
})
export class NgZorroAntdModule { }
