import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppArticleRoutingModule } from './app-article-routing.module';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';


@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    AppArticleRoutingModule
  ]
})
export class AppArticleModule { }
