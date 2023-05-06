import { Component } from '@angular/core';
import { CustomerModel } from './shared/models/customer.model';

const customer: CustomerModel[]= [
  {
    Firstname: 'ali',
    Lastname: 'kashi',
    BirthDate: '2022/12/12',
    PhoneNumber: '09228350033',
    Email: 'ali.kashi.72@gmail.com',
  },
  {
    Firstname: 'zahra',
    Lastname: 'falah',
    BirthDate: '2022/12/11',
    PhoneNumber: '09228350034',
    Email: 'zahra.falah.72@gmail.com',
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-test-angular-latest';
   customers:CustomerModel[]=[]
  constructor(){
    this.customers = customer
    localStorage.setItem('customers',JSON.stringify(this.customers))
  }
}
