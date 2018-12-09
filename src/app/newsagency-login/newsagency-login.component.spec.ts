import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsagencyLoginComponent } from './newsagency-login.component';

describe('NewsagencyLoginComponent', () => {
  let component: NewsagencyLoginComponent;
  let fixture: ComponentFixture<NewsagencyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsagencyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsagencyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
