import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogyHistoryComponent } from './genealogy-history.component';

describe('GenealogyHistoryComponent', () => {
  let component: GenealogyHistoryComponent;
  let fixture: ComponentFixture<GenealogyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
