import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSettingsComponent } from './side-nav-settings.component';

describe('SideNavSettingsComponent', () => {
  let component: SideNavSettingsComponent;
  let fixture: ComponentFixture<SideNavSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
