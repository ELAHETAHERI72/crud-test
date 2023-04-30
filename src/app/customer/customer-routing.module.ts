import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';

const routes: Routes = [
  {path:'',redirectTo:'customer-list',pathMatch:'full'},
  {path:'customer-list',component:CustomerGridComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
