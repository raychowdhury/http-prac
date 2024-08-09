import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Post {
  id?: number;
  title: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    this.http.get<Post[]>(this.url)
      .subscribe(response => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    const post: Post = { title: input.value };

    this.http.post<Post>(this.url, post)
      .subscribe(response => {
        post.id = response.id;  // Set the ID from the response
        this.posts.splice(0, 0, post);  // Add the new post to the beginning of the array
        console.log(response);
      });

    input.value = '';  // Clear the input field after submission
  }
}
