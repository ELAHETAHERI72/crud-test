import { NgModule } from '@angular/core';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';
import { SharedModule } from '../shared/shared.module';
import { AddNewCustomerDialogComponent } from './add-new-customer-dialog/add-new-customer-dialog.component';
import { EditCustomerDialogComponent } from './edit-customer-dialog/edit-customer-dialog.component';


@NgModule({
  declarations: [
    CustomerGridComponent,
    AddNewCustomerDialogComponent,
    EditCustomerDialogComponent
  ],
  imports: [
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
