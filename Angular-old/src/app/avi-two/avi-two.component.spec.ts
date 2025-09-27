import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviTwoComponent } from './avi-two.component';

describe('AviTwoComponent', () => {
  let component: AviTwoComponent;
  let fixture: ComponentFixture<AviTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AviTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AviTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
