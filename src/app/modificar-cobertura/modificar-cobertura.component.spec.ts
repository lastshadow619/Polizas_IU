import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCoberturaComponent } from './modificar-cobertura.component';

describe('ModificarCoberturaComponent', () => {
  let component: ModificarCoberturaComponent;
  let fixture: ComponentFixture<ModificarCoberturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarCoberturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
