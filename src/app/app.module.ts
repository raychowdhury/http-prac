import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './app-posts/components/posts/posts.component';
import { PostDetaisComponent } from './app-posts/components/post-detais/post-detais.component';
import { ApiServiceService } from './app-posts/services/api-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetaisComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
