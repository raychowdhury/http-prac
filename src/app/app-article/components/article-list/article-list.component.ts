import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  public articles: any[] = [];

  constructor(private _articleservice: ArticleService) {}

  ngOnInit() {
    this._articleservice
      .getArticle()
      .subscribe((data) => (this.articles = data));
  }
}
