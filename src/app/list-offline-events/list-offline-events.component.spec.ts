import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfflineEventsComponent } from './list-offline-events.component';

describe('ListOfflineEventsComponent', () => {
  let component: ListOfflineEventsComponent;
  let fixture: ComponentFixture<ListOfflineEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfflineEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfflineEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
