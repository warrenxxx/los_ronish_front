import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPersonOneComponent } from './combo-person-one.component';

describe('ComboPersonOneComponent', () => {
  let component: ComboPersonOneComponent;
  let fixture: ComponentFixture<ComboPersonOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboPersonOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboPersonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
