import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent {
  constructor(private api:ApiService)
  {
   api.fetchPosts().subscribe(
    (response)=>
    {
      this.data=response;
    }
   )
  }
  data:any=[]
}
