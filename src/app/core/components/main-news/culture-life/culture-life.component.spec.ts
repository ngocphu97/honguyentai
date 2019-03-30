import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureLifeComponent } from './culture-life.component';

describe('CultureLifeComponent', () => {
  let component: CultureLifeComponent;
  let fixture: ComponentFixture<CultureLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
