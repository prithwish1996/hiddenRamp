import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineEventsComponent } from './offline-events.component';

describe('OfflineEventsComponent', () => {
  let component: OfflineEventsComponent;
  let fixture: ComponentFixture<OfflineEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
