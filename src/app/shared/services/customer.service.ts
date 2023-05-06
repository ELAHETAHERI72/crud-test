import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerModel } from "../models/customer.model";

@Injectable({
    providedIn:'root'
})

export class CustomerService{

    apiAddress = 'http://localhost:3002/customers';

   constructor(      
    private http: HttpClient,
    ){}

    getAll(){
        return this.http.get(this.apiAddress)
    }

    addNewCustomer(customer:CustomerModel){
       return this.http.post(this.apiAddress,customer)
    }

    updateCustomer(customer:CustomerModel){
        return this.http.put(`${this.apiAddress}/${customer.id}`,customer)
    }

}