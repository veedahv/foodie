import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  constructor(private posts: PostsService) { }

  post: any = [];
  viewEditModal: boolean = false;
  postIndex: number = 0;
  updatePost: object = {
    title: '',
    id: 0,
    userId: 0,
    body: ''
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts.get().subscribe(data => {
      this.post = data;
    })
  }

  editPost(postEdit: object, i: number) {
    this.updatePost = postEdit;
    this.viewEditModal = true;
    this.postIndex = i;
  }

  updatePosts(updatedPost: any) {
      this.post.splice(this.postIndex, 1, updatedPost);
  }

  deletePosts(id: number, i: number) {
    this.posts.remove(id).subscribe(data => {
      this.post.splice(i, 1);
   })
  }

}
