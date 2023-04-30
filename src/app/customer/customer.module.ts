import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CustomerGridComponent
  ],
  imports: [
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
