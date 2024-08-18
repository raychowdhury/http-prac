import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDefaultComponent } from "./components/article-default/article-default.component";
import { ArticleDetailComponent } from "./components/article-detail/article-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ArticleDefaultComponent,
    children: [
      {
        path: 'articlelist',
        component: ArticleListComponent,
      },
      {
        path: 'articledetail',
        component: ArticleDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppArticleRoutingModule { }
