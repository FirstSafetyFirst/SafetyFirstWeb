import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/model/news.service';
import { News } from '../shared/model/news';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: News[];

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.newsService.findAllNews() //will return an observable with  list of news
      //  .do(console.log)
        .subscribe(
            news => this.news = news
          );
  }

}

