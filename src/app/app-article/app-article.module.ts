import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppArticleRoutingModule } from './app-article-routing.module';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDefaultComponent } from './components/article-default/article-default.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleDefaultComponent
  ],
  imports: [
    CommonModule,
    AppArticleRoutingModule
  ]
})
export class AppArticleModule { }
