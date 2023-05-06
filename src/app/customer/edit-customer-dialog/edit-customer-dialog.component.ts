import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerModel } from 'src/app/shared/models/customer.model';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UtilService } from 'src/app/shared/services/util.service';
import * as moment from 'moment';

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
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilService: UtilService,
    private customerService: CustomerService,
    private notificationService: NotificationService
  ) {
  }

  initialCustomerForm() {
    this.customerForm = this.fb.group({
      Firstname: [''],
      Lastname: [''],
      BirthDate: [''],
      PhoneNumber: ['', Validators.pattern(
        '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
      ),],
      Email: ['',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],],
      id: []
    });

  }

  insertValueToForm(item: CustomerModel) {
    this.customerForm.patchValue({
      Firstname: item.Firstname,
      Lastname: item.Lastname,
      BirthDate: moment(item.BirthDate).format('YYYY-DD-MM'),
      Email: item.Email,
      PhoneNumber: item.PhoneNumber,
      id: item.id
    })
  }

  get getCustomerFormControls() {
    return this.customerForm?.controls;
  }

  get Email() {
    return this.customerForm.get('Email')
  }

  get PhoneNumber() {
    return this.customerForm.get('PhoneNumber')
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  updateCustomer() {
    const customerStorage: any = localStorage.getItem('customers');
    let customers: CustomerModel[] = JSON.parse(customerStorage);
    this.insertValueToForm(this.customerForm.value);


    if (this.utilService.checkIsNotduplicated(customers, this.customerForm.value)) {
      this.notificationService.error('فیلد تکراری می باشد')

    }
    else {
      this.customerService.
        updateCustomer(this.customerForm.value).subscribe(res => {
          this.notificationService.success('به روز رسانی با موفقیت انجام شد ')
          this.dialogRef.close();

        })
    }
  }

}
