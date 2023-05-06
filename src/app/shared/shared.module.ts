import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgGridModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports:[
    AgGridModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule { }
