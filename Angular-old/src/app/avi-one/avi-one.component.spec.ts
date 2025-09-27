import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviOneComponent } from './avi-one.component';

describe('AviOneComponent', () => {
  let component: AviOneComponent;
  let fixture: ComponentFixture<AviOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AviOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AviOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
