import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgGridModule,
    MatDialogModule
  ],
  exports:[
    AgGridModule,
    MatDialogModule
  ]
})
export class SharedModule { }
