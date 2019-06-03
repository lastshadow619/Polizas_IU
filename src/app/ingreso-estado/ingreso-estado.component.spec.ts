import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoEstadoComponent } from './ingreso-estado.component';

describe('IngresoEstadoComponent', () => {
  let component: IngresoEstadoComponent;
  let fixture: ComponentFixture<IngresoEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
