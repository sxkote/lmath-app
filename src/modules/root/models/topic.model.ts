export class Topic {
  id = '';
  name = '';
  title = '';
  age = 0;
  comment = '';
  quizAmount = 0;

  constructor(data?: any) {
    if (!data) return;
    Object.assign(this, data);
  }
}

export class TopicModifyModel {
  name = '';
  title = '';
  age = 0;
  comment = '';
  quizAmount = 0;

  constructor(data?: any) {
    if (!data) return;
    Object.assign(this, data);
  }
}
