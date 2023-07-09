import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh200120Component } from './twhinh200120.component';

describe('Twhinh200120Component', () => {
  let component: Twhinh200120Component;
  let fixture: ComponentFixture<Twhinh200120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh200120Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh200120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
