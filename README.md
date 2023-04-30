# CRUD Code Test 

Create a simple CRUD application with Angular that implements the below model:
```
Customer {
	Firstname
	Lastname
	BirthDate
	PhoneNumber
	Email
}
```
### Validations (Must)

- During Create; validate the phone number to be a valid mobile (09xxx...)
- A Valid email must be checked before submitting the form.
- Create a Browser local storage to store list of customers (which acts as our database).
- Customers must be unique in the database: By `Firstname`, `Lastname` and `BirthDate`.
- Email must also be unique in the database

### Bonus points (Optional)
- Using Angular Material library for UI design.
- Using Angular Material Dialog for handling add/edit customer form.
- Using AG-Grid for showing grid of customers.
- Implement some sort of test mechanism like TDD or BDD.
- Implement a mock server using json-server or mirageJs tool for simulating a real API server (a HUGE plus point)
- Clean git commits that shows your work progress.

