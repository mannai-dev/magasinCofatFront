import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh204PopupComponent } from './twhinh204-popup.component';

describe('Twhinh204PopupComponent', () => {
  let component: Twhinh204PopupComponent;
  let fixture: ComponentFixture<Twhinh204PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh204PopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh204PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
