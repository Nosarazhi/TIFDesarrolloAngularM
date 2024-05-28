import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interfaz1Component } from './interfaz1.component';

describe('interfaz1', () => {
  let component: Interfaz1Component;
  let fixture: ComponentFixture<Interfaz1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Interfaz1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Interfaz1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
