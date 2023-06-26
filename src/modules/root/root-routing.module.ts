import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'lbox-auth';
import { HomeView } from './views/home/home.view';
import { LoginView } from './views/login/login.view';
import { RecoveryView } from './views/recovery/recovery.view';
import { ProfileView } from './views/profile/profile.view';
import { AdminView } from './views/admin/admin.view';
import { TopicsView } from './views/topics/topics.view';
import { QuizView } from './views/quiz/quiz.view';
import { StatisticsView } from './views/statistics/statistics.view';
import { CreditcalcView } from './views/calcs/creditcalc/creditcalc.view';

const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'home', component: HomeView },
  { path: 'login', component: LoginView },
  { path: 'recovery/:activity', component: RecoveryView },
  { path: 'profile', component: ProfileView, canActivate: [AuthGuard] },
  { path: 'topics', component: TopicsView },
  { path: 'calc/credit', component: CreditcalcView },
  { path: 'admin', component: AdminView, canActivate: [AuthGuard], data: { roles: ['Redactor'] } },
  { path: 'topics/quiz/:topicID', component: QuizView, canActivate: [AuthGuard] },
  { path: 'statistics', component: StatisticsView, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {
}
