import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboVehiculoComponent } from './combo-vehiculo.component';

describe('ComboVehiculoComponent', () => {
  let component: ComboVehiculoComponent;
  let fixture: ComponentFixture<ComboVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
