import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcisManagerComponent } from './topcis-manager.component';

describe('TopcisManagerComponent', () => {
  let component: TopcisManagerComponent;
  let fixture: ComponentFixture<TopcisManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopcisManagerComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopcisManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
