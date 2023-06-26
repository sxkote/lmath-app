import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DappService } from 'lbox-shared';
import { QuizService } from '../../services/quiz.service';
import { Quiz, QuizAnswer, QuizQuestion } from '../../models/quiz.model';

@Component({
  selector: 'lmath-quiz',
  templateUrl: './quiz.view.html',
  styleUrls: ['./quiz.view.scss'],
})
export class QuizView implements OnInit {
  isLoaded = false;
  topicID?: string;
  quiz?: Quiz;

  answers: Array<QuizAnswer> = [];
  currentAnswer = '';
  isCompleted = false;

  @ViewChild('answerForm') answerForm!: NgForm;
  @ViewChild('inputAnswer') inputAnswer!: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private quizService: QuizService,
              private dappService: DappService) {
  }

  async ngOnInit() {
    const params = await firstValueFrom(this.route.params);
    this.topicID = params['topicID'];

    await this.reload();
  }

  focusInput(timeout: number = 100) {
    // this will make the execution after the visibility changes
    setTimeout(() => {
      this.inputAnswer.nativeElement.focus();
    }, timeout);
  }

  fakeQuiz(): Quiz {
    return new Quiz({
      'id': 'fake-quiz',
      'questions': [
        {
          'id': '1',
          'question': 'Как вы это делаете?',
        },
      ],
    });
  }

  async reload() {
    if (!this.topicID) return;

    this.quiz = await this.quizService.generateQuiz(this.topicID);
    //this.quiz = this.fakeQuiz();
    this.isLoaded = !!this.quiz;
    this.focusInput();
  }

  get currentQuestion(): QuizQuestion | undefined {
    if (!this.quiz || this.isCompleted) return undefined;
    return this.quiz.questions[this.answers.length];
  }

  setAnswer() {
    const question = this.currentQuestion;
    if (!question) {
      console.error('No current question to answer');
      return;
    }

    if (!this.answerForm.valid || !this.currentAnswer) {
      this.dappService.addToastError('math.toasts.empty-answer');
      return;
    }

    this.answers.push(new QuizAnswer(question.id, this.currentAnswer));
    this.currentAnswer = '';
    this.answerForm.reset();
    this.isCompleted = !!this.quiz && this.answers.length >= this.quiz.questions.length;
    this.focusInput();
  }

  async complete() {
    if (!this.quiz || !this.isCompleted) return;
    const result = await this.quizService.makeAnswers(this.quiz.id, this.answers);

    this.dappService.addToastSuccess('math.toasts.quiz-complete');
    this.dappService.addToastSuccess(`${result.correctAnswers} из ${result.questionsCount}`, 'math.toasts.quiz-result-header');
    await this.router.navigate(['/topics']);
  }

  @HostListener('window:keyup.enter', ['$event', 'undefined'])
  async onEnterOrClick(enterEvent: any) {
    enterEvent.stopPropagation();
    if (enterEvent && this.isCompleted) {
      await this.complete();
    }
  }
}
