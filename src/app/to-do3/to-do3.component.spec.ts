import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDo3Component } from './to-do3.component';

describe('ToDo3Component', () => {
  let component: ToDo3Component;
  let fixture: ComponentFixture<ToDo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
