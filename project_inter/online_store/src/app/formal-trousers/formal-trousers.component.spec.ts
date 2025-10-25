import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalTrousersComponent } from './formal-trousers.component';

describe('FormalTrousersComponent', () => {
  let component: FormalTrousersComponent;
  let fixture: ComponentFixture<FormalTrousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormalTrousersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormalTrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
