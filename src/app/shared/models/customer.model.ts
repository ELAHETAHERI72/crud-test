export class CustomerModel{
    Firstname!:string;
	Lastname!:string;
	BirthDate!:string;
	PhoneNumber!:string;
	Email!:string;
	id?:any;

	constructor(Firstname: string,Lastname: string,BirthDate:any,PhoneNumber:string,Email:string,id:any){
		this.Firstname=Firstname;
		this.Lastname =Lastname;
		this.BirthDate=BirthDate;
		this.PhoneNumber=PhoneNumber;
		this.Email=Email;
		this.id = id;
	}
}