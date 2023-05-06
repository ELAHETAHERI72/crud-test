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
import { CustomerService } from 'src/app/shared/services/customer.service';
import { CustomerModel } from 'src/app/shared/models/customer.model';

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

  rowData = [];

  constructor(private customerService: CustomerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllustomers()
  }


  getAllustomers() {
    this.customerService.getAll().subscribe((res: any) => {
      this.rowData = res;
      localStorage.setItem('customers', JSON.stringify(res));

    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewCustomerDialogComponent, {
      data: {},
      panelClass: ['dialog-form-container'],
      backdropClass: [''],
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllustomers()
    });
  }
  onGridReady(event: any) {

  }
  onCellClicked(event: any) {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      data: { data: event.data },
      panelClass: ['dialog-form-container'],
      backdropClass: [''],
    });

    dialogRef.afterClosed().subscribe((result) => { this.getAllustomers() });


  }
}
