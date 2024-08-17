import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  public articles :any

  constructor( private _articleservice: ArticleService){}

  ngOnit(){
    this._articleservice.getArticle()
    .subscribe(data => this.articles = data);
   
}
}




