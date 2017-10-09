import { Component, OnInit, Input } from '@angular/core';
import { News } from '../shared/model/news';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  @Input()
  news: News[];

  constructor() { }

  ngOnInit() {
  }

}
