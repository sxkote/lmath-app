import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsView } from './statistics.view';

describe('StatisticsComponent', () => {
  let component: StatisticsView;
  let fixture: ComponentFixture<StatisticsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsView ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatisticsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
