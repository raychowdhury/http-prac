import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../interface/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getArticle():Observable<Article[]>{
    return this.http.get<Article[]>('https://jsonplaceholder.typicode.com/posts');
  }

  // getArticleById(articleId: number):Observable<Article>{
  //   return this.http.get<Article>('https://jsonplaceholder.typicode.com/posts/${articleId}');
    
  // }

  getArticleById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
