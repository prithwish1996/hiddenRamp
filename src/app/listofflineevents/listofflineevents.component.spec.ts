import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofflineeventsComponent } from './listofflineevents.component';

describe('ListofflineeventsComponent', () => {
  let component: ListofflineeventsComponent;
  let fixture: ComponentFixture<ListofflineeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofflineeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofflineeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
