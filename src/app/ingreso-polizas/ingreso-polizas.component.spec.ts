import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPolizasComponent } from './ingreso-polizas.component';

describe('IngresoPolizasComponent', () => {
  let component: IngresoPolizasComponent;
  let fixture: ComponentFixture<IngresoPolizasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPolizasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
