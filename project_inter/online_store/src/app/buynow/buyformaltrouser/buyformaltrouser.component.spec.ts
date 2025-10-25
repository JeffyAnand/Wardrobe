import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyformaltrouserComponent } from './buyformaltrouser.component';

describe('BuyformaltrouserComponent', () => {
  let component: BuyformaltrouserComponent;
  let fixture: ComponentFixture<BuyformaltrouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyformaltrouserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyformaltrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
