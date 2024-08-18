import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {
  public articles :any

  constructor( private _articleservice: ArticleService){}

  ngOnit(){
    this._articleservice.getArticle()
    .subscribe(data => this.articles = data);
   
}

}
