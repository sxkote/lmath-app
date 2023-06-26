import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService } from 'primeng/api';

import { APP_CONFIGURATION, ConfigurationService, LBoxSharedModule, MultiTranslateHttpLoader } from 'lbox-shared';
import { ErrorInterceptor, JWT_INTERCEPT_URLS, JwtInterceptor, LBoxAuthModule } from 'lbox-auth';

import { RootRoutingModule } from './root-routing.module';

import { environment } from '../../environments/environment';

import { AppView } from './views/app/app.view';
import { HomeView } from './views/home/home.view';
import { LoginView } from './views/login/login.view';
import { MenuComponent } from './components/menu/menu.component';
import { RecoveryView } from './views/recovery/recovery.view';
import { ProfileView } from './views/profile/profile.view';
import { TopcisManagerComponent } from './components/topcis-manager/topcis-manager.component';
import { AdminView } from './views/admin/admin.view';
import { TabViewModule } from 'primeng/tabview';
import { TopicModifyComponent } from './components/topic-modify/topic-modify.component';
import { CardModule } from 'primeng/card';
import { TopicsView } from './views/topics/topics.view';
import { QuizView } from './views/quiz/quiz.view';
import { StatisticsView } from './views/statistics/statistics.view';
import { CreditcalcView } from './views/calcs/creditcalc/creditcalc.view';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/locale/', suffix: '.json' },
    { prefix: './assets/locale/lbox-shared/', suffix: '.json' },
    { prefix: './assets/locale/lbox-auth/', suffix: '.json' },
  ]);
}

export function configServiceFactory(configService: ConfigurationService) {
  return () => {
    configService.loadConfig();
  };
}

@NgModule({
  declarations: [
    AppView,
    HomeView,
    LoginView,
    MenuComponent,
    RecoveryView,
    ProfileView,
    TopcisManagerComponent,
    AdminView,
    TopicModifyComponent,
    TopicsView,
    QuizView,
    StatisticsView,
    CreditcalcView,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RootRoutingModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forChild({
      defaultLanguage: 'ru',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    LBoxSharedModule,
    LBoxAuthModule,
    RippleModule,
    StyleClassModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    CheckboxModule,
    InputNumberModule,
    InputTextModule,
    TabViewModule,
    CardModule,
  ],
  providers: [
    //{ provide: APP_BASE_HREF, useValue: environment.baseHref },
    MessageService,
    { provide: TranslateStore },
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigurationService],
      multi: true,
    },
    { provide: JWT_INTERCEPT_URLS, useValue: [environment.apiUrl, environment.lboxUrl] },
    { provide: APP_CONFIGURATION, useValue: environment },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppView],
})
export class RootModule {
}
