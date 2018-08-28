import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioMantenimientoComponent } from './itinerario-mantenimiento.component';

describe('ItinerarioMantenimientoComponent', () => {
  let component: ItinerarioMantenimientoComponent;
  let fixture: ComponentFixture<ItinerarioMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarioMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarioMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
