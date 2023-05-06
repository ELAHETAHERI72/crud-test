import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { AddNewCustomerDialogComponent } from '../add-new-customer-dialog/add-new-customer-dialog.component';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { EditCustomerDialogComponent } from '../edit-customer-dialog/edit-customer-dialog.component';

@Component({
  selector: 'app-customer-grid',
  templateUrl: './customer-grid.component.html',
  styleUrls: ['./customer-grid.component.css'],
})

export class CustomerGridComponent implements OnInit {
  columnDefs: ColDef[] = [
    
    { field: 'Firstname' },
    { field: 'Lastname' },
    { field: 'BirthDate' },
    { field: 'PhoneNumber' },
    { field: 'Email' },
    
  ];

  rowData = [
    {
      Firstname: 'Toyota',
      Lastname: 'Celica',
      BirthDate: 35000,
      PhoneNumber: '09228350032',
      Email: 'elahe.ta.72@gmail.com',
    },
    {
      Firstname: 'Toyota',
      Lastname: 'Celica',
      BirthDate: 35000,
      PhoneNumber: '09228350032',
      Email: 'elahe.ta.72@gmail.com',
    },
    {
      Firstname: 'Toyota',
      Lastname: 'Celica',
      BirthDate: 35000,
      PhoneNumber: '09228350032',
      Email: 'elahe.ta.72@gmail.com',
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewCustomerDialogComponent, {
      data: {},
      panelClass: ['dialog-form-container'],
      backdropClass: [''],
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  onGridReady(event: any) {
     
  }
  onCellClicked(event: any) {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      data: {data:event.data},
      panelClass: ['dialog-form-container'],
      backdropClass: [''],
    });

    dialogRef.afterClosed().subscribe((result) => {});

    
  }
}


// @Component({
//   selector: 'btn-cell-renderer',
//   template: `
//     <button (click)="btnClickedHandler($event)">Click me!</button>
//   `,
// })
// export class BtnCellRenderer implements ICellRendererAngularComp {
//   refresh(params: ICellRendererParams<any, any, any>): boolean {
//     throw new Error('Method not implemented.');
//   }
//   private params: any;

//   agInit(params: any): void {
//     this.params = params;
//   }

//   btnClickedHandler(event:any) {
//     this.params.clicked(this.params.value);
//   }
// }