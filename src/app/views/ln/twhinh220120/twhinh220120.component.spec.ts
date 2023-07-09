import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh220120Component } from './twhinh220120.component';

describe('Twhinh220120Component', () => {
  let component: Twhinh220120Component;
  let fixture: ComponentFixture<Twhinh220120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh220120Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh220120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
