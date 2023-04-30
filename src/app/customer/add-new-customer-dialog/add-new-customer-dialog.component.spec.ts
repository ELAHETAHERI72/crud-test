import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCustomerDialogComponent } from './add-new-customer-dialog.component';

describe('AddNewCustomerDialogComponent', () => {
  let component: AddNewCustomerDialogComponent;
  let fixture: ComponentFixture<AddNewCustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCustomerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
