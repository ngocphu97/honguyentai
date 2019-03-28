import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneursComponent } from './entrepreneurs.component';

describe('EntrepreneursComponent', () => {
  let component: EntrepreneursComponent;
  let fixture: ComponentFixture<EntrepreneursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepreneursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
