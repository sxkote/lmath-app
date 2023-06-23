import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'lmath-topics',
  templateUrl: './topics.view.html',
  styleUrls: ['./topics.view.scss'],
})
export class TopicsView implements OnInit {
  isLoaded = false;
  topics: Array<Topic> = [];

  constructor(private topicService: TopicService) {
  }

  async ngOnInit() {
    await this.reload();
  }

  async reload() {
    this.topics = await this.topicService.getAll();
    this.isLoaded = true;
  }
}
