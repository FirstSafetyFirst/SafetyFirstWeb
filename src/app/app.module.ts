import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { routerConfig } from './router.config';

import { firebaseConfig } from '../environments/firebase.config';
import { NewsService } from './shared/model/news.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseProvider } from 'angularfire2/database';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NewsListComponent } from './news-list/news-list.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { KnowItComponent } from './know-it/know-it.component';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    NewsListComponent,
    DiscussionComponent,
    KnowItComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [AngularFireDatabaseProvider, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
