import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSpeakerComponent } from './guest-speaker.component';

describe('GuestSpeakerComponent', () => {
  let component: GuestSpeakerComponent;
  let fixture: ComponentFixture<GuestSpeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestSpeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
