import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './app-posts/posts/posts.component';
import { PostDetailsComponent } from './app-posts/post-details/post-details.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'details', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
