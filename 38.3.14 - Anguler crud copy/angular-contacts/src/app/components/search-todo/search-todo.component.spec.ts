import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTodoComponent } from './search-todo.component';

describe('SearchTodoComponent', () => {
  let component: SearchTodoComponent;
  let fixture: ComponentFixture<SearchTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
