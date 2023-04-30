import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-customer-dialog',
  templateUrl: './add-new-customer-dialog.component.html',
  styleUrls: ['./add-new-customer-dialog.component.css']
})
export class AddNewCustomerDialogComponent implements OnInit {
  
  ngOnInit(): void {
  }

  constructor( public dialogRef: MatDialogRef<AddNewCustomerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
      ) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
}
