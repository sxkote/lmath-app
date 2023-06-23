import { Injectable } from '@angular/core';
import { EntityService } from 'lbox-shared';
import { Topic, TopicModifyModel } from '../models/topic.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class TopicService extends EntityService<Topic, TopicModifyModel, TopicModifyModel> {
  constructor(protected override backend: RestService) {
    super(Topic, backend);
    this._prefix = 'topic';
  }
}
