import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StemmataComponent } from './stemmata.component';

describe('StemmataComponent', () => {
  let component: StemmataComponent;
  let fixture: ComponentFixture<StemmataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemmataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StemmataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
