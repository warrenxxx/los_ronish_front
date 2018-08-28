import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientosChoseComponent } from './asientos-chose.component';

describe('AsientosChoseComponent', () => {
  let component: AsientosChoseComponent;
  let fixture: ComponentFixture<AsientosChoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsientosChoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsientosChoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
