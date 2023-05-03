import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-customer-dialog',
  templateUrl: './add-new-customer-dialog.component.html',
  styleUrls: ['./add-new-customer-dialog.component.css'],
})
export class AddNewCustomerDialogComponent implements OnInit {
  customerForm!: FormGroup;

  ngOnInit(): void {
    this.initialCustomerForm();
  }

  initialCustomerForm() {
    this.customerForm = this.fb.group({
      Firstname: [],
      Lastname: [],
      BirthDate: [],
      PhoneNumber: [
        '',
        ,
        [
          Validators.required,
          Validators.pattern(
            '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
          ),
        ],
      ],
      Email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

 get getCustomerFormControls(){
    return this.customerForm?.controls;
  }

  get Email(){
    return this.customerForm.get('Email')
  }

  get PhoneNumber(){
    return this.customerForm.get('PhoneNumber')
  }


  constructor(
    public dialogRef: MatDialogRef<AddNewCustomerDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
