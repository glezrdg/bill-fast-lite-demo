import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBillPageComponent } from './add-bill-page.component';

describe('AddBillPageComponent', () => {
  let component: AddBillPageComponent;
  let fixture: ComponentFixture<AddBillPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBillPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
