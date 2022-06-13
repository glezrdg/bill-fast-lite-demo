import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientPageComponent } from './add-client-page.component';

describe('AddClientPageComponent', () => {
  let component: AddClientPageComponent;
  let fixture: ComponentFixture<AddClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
