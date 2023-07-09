import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh120PopupComponent } from './twhinh120-popup.component';

describe('Twhinh120PopupComponent', () => {
  let component: Twhinh120PopupComponent;
  let fixture: ComponentFixture<Twhinh120PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh120PopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh120PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
