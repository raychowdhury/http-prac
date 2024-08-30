import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-article/app-article.module').then(m => m.AppArticleModule)
    
  },
  {
    path: '',
    loadChildren: () => import('./app-about/app-about.module').then(m => m.AppAboutModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
