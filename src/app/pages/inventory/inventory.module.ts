import { NgModule } from '@angular/core';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';

import { NgZorroAntdModule } from '../../imports/ng-zorro-antd.module';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    InventoryRoutingModule,
    NgZorroAntdModule
  ],
  exports: [InventoryComponent]
})
export class InventoryModule { }
