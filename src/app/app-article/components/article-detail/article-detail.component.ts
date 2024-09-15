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
    this._articleservice.getArticleById(1)
    .subscribe(article => 
      console.log(article));
   
}

}

// article: Article;

// ngOnInit() {
//   const articleId = 1; // Example ID, you can dynamically set this
//   this.getArticleById(articleId).subscribe(
//     (data: Article) => {
//       this.article = data;
//     },
//     (error) => {
//       console.error('Error fetching article:', error);
//     }
//   );
// }

