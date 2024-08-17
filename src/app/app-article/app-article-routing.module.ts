import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

const routes: Routes = [
  { path: 'ArticleList', component: ArticleListComponent },
  { path: 'ArticleDetails', component: ArticleDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppArticleRoutingModule { }
