import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserLoginComponent } from './advertiser-login.component';

describe('AdvertiserLoginComponent', () => {
  let component: AdvertiserLoginComponent;
  let fixture: ComponentFixture<AdvertiserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
