import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoirListComponent } from './memoir-list.component';

describe('MemoirListComponent', () => {
  let component: MemoirListComponent;
  let fixture: ComponentFixture<MemoirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
