import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {
  
  public article: any;

  constructor( 
    private route: ActivatedRoute,
    private _articleservice: ArticleService
  
  ){}

  ngOnInit() {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this._articleservice.getArticleById(articleId).subscribe((data) => {
        this.article = data;
      });
    }
  }

}

