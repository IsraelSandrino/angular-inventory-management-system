import { NgModule } from '@angular/core';

import { InventoryRoutingModule } from './inventory-routing.module';

import { InventoryComponent } from './inventory.component';


@NgModule({
  declarations: [InventoryComponent],
  imports: [InventoryRoutingModule],
  exports: [InventoryComponent]
})
export class InventoryModule { }
