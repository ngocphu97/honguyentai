import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoirDetailComponent } from './memoir-detail.component';

describe('MemoirDetailComponent', () => {
  let component: MemoirDetailComponent;
  let fixture: ComponentFixture<MemoirDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoirDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
