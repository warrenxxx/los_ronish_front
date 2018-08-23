import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMantenimientoComponent } from './user-mantenimiento.component';

describe('UserMantenimientoComponent', () => {
  let component: UserMantenimientoComponent;
  let fixture: ComponentFixture<UserMantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
