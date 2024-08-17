import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

public articles :any

  constructor( private _articleservice: ArticleService){}

  ngOnit(){
    this._articleservice.getArticle()
    .subscribe(data => this.articles = data);
   
}
}
