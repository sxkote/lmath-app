import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcalcView } from './creditcalc.view';

describe('CreditcalcComponent', () => {
  let component: CreditcalcView;
  let fixture: ComponentFixture<CreditcalcView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcalcView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcalcView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
