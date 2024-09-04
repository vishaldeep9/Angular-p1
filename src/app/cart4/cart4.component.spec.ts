import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cart4Component } from './cart4.component';

describe('Cart4Component', () => {
  let component: Cart4Component;
  let fixture: ComponentFixture<Cart4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cart4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
