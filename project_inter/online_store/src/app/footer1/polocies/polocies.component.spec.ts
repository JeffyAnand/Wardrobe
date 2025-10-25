import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolociesComponent } from './polocies.component';

describe('PolociesComponent', () => {
  let component: PolociesComponent;
  let fixture: ComponentFixture<PolociesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolociesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
