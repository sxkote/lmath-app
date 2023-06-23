import { Component, Input } from '@angular/core';
import { TopicModifyModel } from '../../models/topic.model';

@Component({
  selector: 'lmath-topic-modify',
  templateUrl: './topic-modify.component.html',
  styleUrls: ['./topic-modify.component.scss'],
})
export class TopicModifyComponent {
  @Input() model!: TopicModifyModel;
}
