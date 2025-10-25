import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualTrousersComponent } from './casual-trousers.component';

describe('CasualTrousersComponent', () => {
  let component: CasualTrousersComponent;
  let fixture: ComponentFixture<CasualTrousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasualTrousersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasualTrousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
