import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicModifyComponent } from './topic-modify.component';

describe('TopicModifyComponent', () => {
  let component: TopicModifyComponent;
  let fixture: ComponentFixture<TopicModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicModifyComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopicModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
