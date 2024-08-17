import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './app-article/services/article.service';
import { ArticleListComponent } from './app-article/components/article-list/article-list.component';
import { ArticleDetailsComponent } from './app-article/components/article-details/article-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
