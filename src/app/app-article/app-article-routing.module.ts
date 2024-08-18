import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const routes: Routes = [
  { path: 'articlelist', component: ArticleListComponent },
  { path: 'articledetail', component: ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppArticleRoutingModule { }
