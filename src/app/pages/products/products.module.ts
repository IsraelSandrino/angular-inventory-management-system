import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { TableModule } from '../../components/table/table.module';

import { NgZorroAntdModule } from '../../imports/ng-zorro-antd.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule,
    NgZorroAntdModule,
    ToolbarModule,
    TableModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
