import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh204120Component } from './twhinh204120.component';

describe('Twhinh204120Component', () => {
  let component: Twhinh204120Component;
  let fixture: ComponentFixture<Twhinh204120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh204120Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh204120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
