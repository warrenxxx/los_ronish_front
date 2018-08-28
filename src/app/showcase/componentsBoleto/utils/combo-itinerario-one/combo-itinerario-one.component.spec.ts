import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboItinerarioOneComponent } from './combo-itinerario-one.component';

describe('ComboItinerarioOneComponent', () => {
  let component: ComboItinerarioOneComponent;
  let fixture: ComponentFixture<ComboItinerarioOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboItinerarioOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboItinerarioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
