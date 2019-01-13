import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuestSpeakersComponent } from './view-guest-speakers.component';

describe('ViewGuestSpeakersComponent', () => {
  let component: ViewGuestSpeakersComponent;
  let fixture: ComponentFixture<ViewGuestSpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuestSpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuestSpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
