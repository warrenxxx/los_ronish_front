import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AisentoChoseClientComponent } from './aisento-chose-client.component';

describe('AisentoChoseClientComponent', () => {
  let component: AisentoChoseClientComponent;
  let fixture: ComponentFixture<AisentoChoseClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AisentoChoseClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AisentoChoseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
