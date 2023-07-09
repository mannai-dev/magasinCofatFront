import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh220PopupComponent } from './twhinh220-popup.component';

describe('Twhinh220PopupComponent', () => {
  let component: Twhinh220PopupComponent;
  let fixture: ComponentFixture<Twhinh220PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh220PopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh220PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
