import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOnlineEventsComponent } from './list-of-online-events.component';

describe('ListOfOnlineEventsComponent', () => {
  let component: ListOfOnlineEventsComponent;
  let fixture: ComponentFixture<ListOfOnlineEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfOnlineEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOnlineEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
