import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpolicyComponent } from './orderpolicy.component';

describe('OrderpolicyComponent', () => {
  let component: OrderpolicyComponent;
  let fixture: ComponentFixture<OrderpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderpolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
