import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avi3Component } from './avi-3.component';

describe('Avi3Component', () => {
  let component: Avi3Component;
  let fixture: ComponentFixture<Avi3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avi3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Avi3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
