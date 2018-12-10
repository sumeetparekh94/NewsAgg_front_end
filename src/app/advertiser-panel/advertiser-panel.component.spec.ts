import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiserPanelComponent } from './advertiser-panel.component';

describe('AdvertiserPanelComponent', () => {
  let component: AdvertiserPanelComponent;
  let fixture: ComponentFixture<AdvertiserPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
