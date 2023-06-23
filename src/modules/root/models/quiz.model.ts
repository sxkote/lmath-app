import { Topic } from './topic.model';

export class QuizQuestion {
  id = '';
  question = '';

  constructor(data?: any) {
    if (!data) return;
    this.id = data.id;
    this.question = data.question;
  }

}

export class Quiz {
  id = '';
  questions: Array<QuizQuestion> = [];

  constructor(data?: any) {
    if (!data) return;
    this.id = data.id;
    if (data.questions)
      this.questions = data.questions.map((q: any) => new QuizQuestion(q));
  }
}

export class QuizAnswer {
  questionID = '';
  answer = '';

  constructor(questionID: string, answer: string) {
    this.questionID = questionID;
    this.answer = answer;
  }
}

export class QuizQuestionInfo {
  id = '';
  question = '';
  answer = '';
  state: 'NoAnswer' | 'Correct' | 'Incorrect' = 'NoAnswer';

  constructor(data?: any) {
    if (!data) return;
    this.id = data.id;
    this.question = data.question;
    this.answer = data.answer;
    this.state = data.state;
  }
}

export class QuizInfo {
  id = '';
  topic: Topic = new Topic();
  created: Date = new Date();
  completed?: Date;
  questionsCount = 0;
  correctAnswers = 0;
  state: 'Undone' | 'Done' = 'Undone';
  questions: Array<QuizQuestionInfo> = [];

  constructor(data?: any) {
    if (!data) return;
    this.id = data.id;
    this.topic = new Topic(data.topic);
    this.created = new Date(data.created);
    this.completed = data.completed ? new Date(data.completed) : undefined;
    this.questionsCount = data.questionsCount;
    this.correctAnswers = data.correctAnswers;
    this.state = data.state;
    this.questions = data.questions?.map((q: any) => new QuizQuestionInfo(q)) ?? [];
  }
}
