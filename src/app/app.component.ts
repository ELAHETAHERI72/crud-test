import { Component } from '@angular/core';
import { CustomerModel } from './shared/models/customer.model';



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
