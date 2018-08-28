import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaMantenimientoComponent } from './reserva-mantenimiento.component';

describe('ReservaMantenimientoComponent', () => {
  let component: ReservaMantenimientoComponent;
  let fixture: ComponentFixture<ReservaMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
