import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoMantenimientoComponent } from './vehiculo-mantenimiento.component';

describe('VehiculoMantenimientoComponent', () => {
  let component: VehiculoMantenimientoComponent;
  let fixture: ComponentFixture<VehiculoMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
