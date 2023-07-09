import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh220DetailsComponent } from './twhinh220-details.component';

describe('Twhinh220DetailsComponent', () => {
  let component: Twhinh220DetailsComponent;
  let fixture: ComponentFixture<Twhinh220DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh220DetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh220DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
