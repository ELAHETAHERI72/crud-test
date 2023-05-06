import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgGridModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,

  ],
  exports:[
    AgGridModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule,
     MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }
