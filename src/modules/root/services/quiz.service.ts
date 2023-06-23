import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Quiz, QuizAnswer, QuizInfo } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(public backend: RestService) {
  }

  public async getStatistics(): Promise<Array<QuizInfo>> {
    const response = await this.backend.get('quiz/statistics');
    return response.map((q: any) => new QuizInfo(q));
  }

  public async generateQuiz(topicID: string): Promise<Quiz> {
    const response = await this.backend.post(`quiz/topic/${topicID}`, null);
    return new Quiz(response);
  }

  public async makeAnswers(quizID: string, answers: Array<QuizAnswer>): Promise<QuizInfo> {
    const data = answers.map(a => {
      return {
        questionID: a.questionID,
        answer: a.answer.toString(),
      };
    });

    const response = await this.backend.post(`quiz/${quizID}/answer`, data);
    return new QuizInfo(response);
  }
}
