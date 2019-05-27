import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogyHistoryListComponent } from './genealogy-history-list.component';

describe('GenealogyHistoryListComponent', () => {
  let component: GenealogyHistoryListComponent;
  let fixture: ComponentFixture<GenealogyHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogyHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogyHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
