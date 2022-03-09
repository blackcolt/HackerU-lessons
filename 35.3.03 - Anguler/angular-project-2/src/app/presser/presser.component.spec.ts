import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresserComponent } from './presser.component';

describe('PresserComponent', () => {
  let component: PresserComponent;
  let fixture: ComponentFixture<PresserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
