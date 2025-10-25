import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyshirtComponent } from './buyshirt.component';

describe('BuyshirtComponent', () => {
  let component: BuyshirtComponent;
  let fixture: ComponentFixture<BuyshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyshirtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
