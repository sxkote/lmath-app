import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsView } from './topics.view';

describe('TopicsComponent', () => {
  let component: TopicsView;
  let fixture: ComponentFixture<TopicsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsView ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopicsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
