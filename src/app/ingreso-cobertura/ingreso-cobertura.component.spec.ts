import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoCoberturaComponent } from './ingreso-cobertura.component';

describe('IngresoCoberturaComponent', () => {
  let component: IngresoCoberturaComponent;
  let fixture: ComponentFixture<IngresoCoberturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoCoberturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
