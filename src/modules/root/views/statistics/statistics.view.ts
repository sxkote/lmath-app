import { Component, OnInit } from '@angular/core';
import { LBTable } from 'lbox-shared';
import { QuizInfo } from '../../models/quiz.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'lmath-statistics',
  templateUrl: './statistics.view.html',
  styleUrls: ['./statistics.view.scss'],
})
export class StatisticsView implements OnInit {
  table?: LBTable<QuizInfo>;

  constructor(private quizService: QuizService) {
  }

  async ngOnInit() {
    this.table = new LBTable({
      translate: true,
      columns: [
        { name: 'topic.title', title: 'math.quiz.topic', type: 'string', visible: true },
        { name: 'created', title: 'math.quiz.created', type: 'date', visible: true },
        { name: 'completed', title: 'math.quiz.completed', type: 'date', visible: true },
        { name: 'questionsCount', title: 'math.quiz.questionsCount', type: 'number', visible: true },
        { name: 'correctAnswers', title: 'math.quiz.correctAnswers', type: 'number', visible: true },
        { name: 'state', title: 'math.quiz.state', type: 'string', visible: true },
      ],
      reloadData: () => this.reloadData(),
    });

    await this.table.reload();
  }

  async reloadData(): Promise<Array<QuizInfo>> {
    return this.quizService.getStatistics();
  }
}
