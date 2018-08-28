import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboVehiculoOneComponent } from './combo-vehiculo-one.component';

describe('ComboVehiculoOneComponent', () => {
  let component: ComboVehiculoOneComponent;
  let fixture: ComponentFixture<ComboVehiculoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboVehiculoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboVehiculoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
