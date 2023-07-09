import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Twhinh200DetailsComponent } from './twhinh200-details.component';

describe('Twhinh200DetailsComponent', () => {
  let component: Twhinh200DetailsComponent;
  let fixture: ComponentFixture<Twhinh200DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Twhinh200DetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Twhinh200DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
