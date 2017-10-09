import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { News } from './news';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class NewsService {

  constructor(public af: AngularFireDatabase) { }


  findAllNews(): Observable<News[]> {
    return this.af.list('news');
              //  .do(console.log )
                //.map(News.fromJsonList);
  }

}
