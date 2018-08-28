import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboTerminalOneComponent } from './combo-terminal-one.component';

describe('ComboTerminalOneComponent', () => {
  let component: ComboTerminalOneComponent;
  let fixture: ComponentFixture<ComboTerminalOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboTerminalOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboTerminalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
