import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalMantenimientoComponent } from './terminal-mantenimiento.component';

describe('TerminalMantenimientoComponent', () => {
  let component: TerminalMantenimientoComponent;
  let fixture: ComponentFixture<TerminalMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminalMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
