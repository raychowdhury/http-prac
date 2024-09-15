import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  public articles: any[] = [];
 

  constructor(private _articleservice: ArticleService, private _router: Router,) {}

  ngOnInit() {
    this._articleservice
      .getArticle()
      .subscribe((data) => (this.articles = data));
  }

  onArticleItem(id : string, title:string, body:string){
    console.log(`${id} - ${title} - ${body}`); 
    this._router.navigate([`/article/${id}`]).then();

  }
}
