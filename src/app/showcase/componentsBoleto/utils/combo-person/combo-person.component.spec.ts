import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPersonComponent } from './combo-person.component';

describe('ComboPersonComponent', () => {
  let component: ComboPersonComponent;
  let fixture: ComponentFixture<ComboPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
