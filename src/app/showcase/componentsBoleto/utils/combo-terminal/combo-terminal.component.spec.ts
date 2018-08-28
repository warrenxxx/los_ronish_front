import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboTerminalComponent } from './combo-terminal.component';

describe('ComboTerminalComponent', () => {
  let component: ComboTerminalComponent;
  let fixture: ComponentFixture<ComboTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
