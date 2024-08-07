import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeDashboardComponent } from './recharge-dashboard.component';

describe('RechargeDashboardComponent', () => {
  let component: RechargeDashboardComponent;
  let fixture: ComponentFixture<RechargeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechargeDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
