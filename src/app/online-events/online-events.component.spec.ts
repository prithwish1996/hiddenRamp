import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEventsComponent } from './online-events.component';

describe('OnlineEventsComponent', () => {
  let component: OnlineEventsComponent;
  let fixture: ComponentFixture<OnlineEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
