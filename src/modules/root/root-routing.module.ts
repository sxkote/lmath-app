import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { LoginView } from './views/login/login.view';
import { RecoveryView } from './views/recovery/recovery.view';
import { ProfileView } from './views/profile/profile.view';
import { AdminView } from './views/admin/admin.view';
import { TopicsView } from './views/topics/topics.view';
import { QuizView } from './views/quiz/quiz.view';
import { StatisticsView } from './views/statistics/statistics.view';

const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'home', component: HomeView },
  { path: 'login', component: LoginView },
  { path: 'recovery/:activity', component: RecoveryView },
  { path: 'profile', component: ProfileView },
  { path: 'admin', component: AdminView },
  { path: 'topics', component: TopicsView },
  { path: 'topics/quiz/:topicID', component: QuizView },
  { path: 'statistics', component: StatisticsView },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
