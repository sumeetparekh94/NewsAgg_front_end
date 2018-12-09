import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsManagerComponent } from './admin-news-manager.component';

describe('AdminNewsManagerComponent', () => {
  let component: AdminNewsManagerComponent;
  let fixture: ComponentFixture<AdminNewsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
