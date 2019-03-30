import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipingMeritComponent } from './worshiping-merit.component';

describe('WorshipingMeritComponent', () => {
  let component: WorshipingMeritComponent;
  let fixture: ComponentFixture<WorshipingMeritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorshipingMeritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorshipingMeritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
