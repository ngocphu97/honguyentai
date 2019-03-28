import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLibComponent } from './image-lib.component';

describe('ImageLibComponent', () => {
  let component: ImageLibComponent;
  let fixture: ComponentFixture<ImageLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
