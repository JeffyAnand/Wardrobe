import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyjeansComponent } from './buyjeans.component';

describe('BuyjeansComponent', () => {
  let component: BuyjeansComponent;
  let fixture: ComponentFixture<BuyjeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyjeansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
