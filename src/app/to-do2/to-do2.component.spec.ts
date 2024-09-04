import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo2Component } from './to-do2.component';

describe('ToDo2Component', () => {
  let component: ToDo2Component;
  let fixture: ComponentFixture<ToDo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
