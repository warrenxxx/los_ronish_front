import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellVisaComponent } from './sell-visa.component';

describe('SellVisaComponent', () => {
  let component: SellVisaComponent;
  let fixture: ComponentFixture<SellVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
