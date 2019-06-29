import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneursDetailComponent } from './entrepreneurs-detail.component';

describe('EntrepreneursDetailComponent', () => {
  let component: EntrepreneursDetailComponent;
  let fixture: ComponentFixture<EntrepreneursDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepreneursDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneursDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
