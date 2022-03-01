import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToImageComponent } from './to-image.component';

describe('ToImageComponent', () => {
  let component: ToImageComponent;
  let fixture: ComponentFixture<ToImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
