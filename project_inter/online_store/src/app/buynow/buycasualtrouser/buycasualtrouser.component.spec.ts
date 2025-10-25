import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycasualtrouserComponent } from './buycasualtrouser.component';

describe('BuycasualtrouserComponent', () => {
  let component: BuycasualtrouserComponent;
  let fixture: ComponentFixture<BuycasualtrouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuycasualtrouserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuycasualtrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
