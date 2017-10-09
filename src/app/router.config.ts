import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DiscussionComponent } from './discussion/discussion.component';
import {TrainingComponent } from './training/training.component';
import {KnowItComponent } from './know-it/know-it.component';

export const routerConfig : Route[] = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'discussion',
    component: DiscussionComponent
  },
  {
    path:'training',
    component: TrainingComponent
  },
  {
    path:'knowit',
    component: KnowItComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
   }

];
