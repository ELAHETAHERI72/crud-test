import { Component } from '@angular/core';
import { CustomerModel } from './shared/models/customer.model';
import { CustomerService } from './shared/services/customer.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-test-angular-latest';
   customers:CustomerModel[]=[]
  constructor(private customerService:CustomerService){
  

  }
}
