import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuytshirtComponent } from './buytshirt.component';

describe('BuytshirtComponent', () => {
  let component: BuytshirtComponent;
  let fixture: ComponentFixture<BuytshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuytshirtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuytshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
