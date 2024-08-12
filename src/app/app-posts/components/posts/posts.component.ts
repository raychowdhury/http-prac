import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts : any;

  constructor(private ApiServiceService: ApiServiceService){}

  ngOnInit():void{
    this.ApiServiceService.getPosts()
    .subscribe((data) => {  
      this.posts = data;
      console.log(data);
      
  }
);
  }
  
}
