import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerModel } from 'src/app/shared/models/customer.model';

@Component({
  selector: 'app-edit-customer-dialog',
  templateUrl: './edit-customer-dialog.component.html',
  styleUrls: ['./edit-customer-dialog.component.css']
})
export class EditCustomerDialogComponent implements OnInit {
  customerForm!: FormGroup;

  ngOnInit(): void {
    this.initialCustomerForm();
    this.insertValueToForm(this.data.data);
    
  }

  constructor(
    public dialogRef: MatDialogRef<EditCustomerDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   }

   initialCustomerForm() {
    this.customerForm  = this.fb.group({
      Firstname: [''],
      Lastname  : [''],
      BirthDate: [''],
      PhoneNumber: ['', Validators.pattern(
                '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
              ),],
      Email: ['',
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],],
  });
 
  }


  insertValueToForm(item:CustomerModel){
    this.customerForm.patchValue({
      Firstname:item.Firstname,
      Lastname: item.Lastname,
      BirthDate: item.BirthDate,
      Email:item.Email,
      PhoneNumber:item.PhoneNumber
    })
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


  onNoClick(): void {
    this.dialogRef.close();
  }

}
