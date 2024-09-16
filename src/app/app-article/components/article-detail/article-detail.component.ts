import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent {
  
  public article: any;

  constructor( 
    private route: ActivatedRoute,
    private _articleservice: ArticleService,
    private router: Router
  
  ){}

  ngOnInit() {
    // Subscribe to route parameter changes
    this.route.paramMap.subscribe((params) => {
      const articleId = params.get('id');
      if (articleId) {
        // Fetch the article when the ID changes
        this._articleservice.getArticleById(articleId).subscribe((data) => {
          this.article = data;
        });
      }
    });
  }
  goPrevious(){
    this.router.navigate(['/article', this.article.id - 1]);
     

  }

  goNext(){
    this.router.navigate(['/article', this.article.id + 1]);
  }

}

