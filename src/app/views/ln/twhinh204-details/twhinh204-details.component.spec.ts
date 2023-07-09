import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh204DetailsComponent } from './twhinh204-details.component';

describe('Twhinh204DetailsComponent', () => {
  let component: Twhinh204DetailsComponent;
  let fixture: ComponentFixture<Twhinh204DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh204DetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh204DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
