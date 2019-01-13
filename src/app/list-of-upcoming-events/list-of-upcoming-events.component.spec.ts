import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUpcomingEventsComponent } from './list-of-upcoming-events.component';

describe('ListOfUpcomingEventsComponent', () => {
  let component: ListOfUpcomingEventsComponent;
  let fixture: ComponentFixture<ListOfUpcomingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfUpcomingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
