import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBgComponent } from './entry-bg.component';

describe('EntryBgComponent', () => {
  let component: EntryBgComponent;
  let fixture: ComponentFixture<EntryBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
