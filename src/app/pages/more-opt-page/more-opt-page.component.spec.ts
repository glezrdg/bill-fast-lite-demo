import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreOptPageComponent } from './more-opt-page.component';

describe('MoreOptPageComponent', () => {
  let component: MoreOptPageComponent;
  let fixture: ComponentFixture<MoreOptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreOptPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreOptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
