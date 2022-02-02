import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  // constructor(private posts: PostsService, private formBuilder: FormBuilder) { }
  constructor(private posts: PostsService) { }

  post: any = []
  // postForm = this.formBuilder.group({
  //   userId: '',
  //   title: '',
  //   body: ''
  // });
  
 
  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts.get().subscribe(data => {
      this.post = data;
      console.log(this.post);
      // this.totalPages = Math.ceil(this.cuisines.meals.length / 24);
      // this.cuisinesCurrentPage = this.cuisines.meals.slice(this.currentPage * 24, ((this.currentPage * 24) + 24));
    })
  }

  deletePosts(id: number, i: number) {
    this.posts.remove(id).subscribe(data => {
      // this.post = data;
      // console.log(this.post);
      this.post.splice(i, 1)
      console.log(id);      
      console.log(data);
      // this.totalPages = Math.ceil(this.cuisines.meals.length / 24);
      // this.cuisinesCurrentPage = this.cuisines.meals.slice(this.currentPage * 24, ((this.currentPage * 24) + 24));
    })
  }

  // sendPost() {
  //   if (this.postForm.value.userId !== '' || this.postForm.value.title !== '' || this.postForm.value.body !== '') {
  //     this.posts.create(JSON.stringify(this.postForm.value)).subscribe(data => {
  //       this.post = data;
  //       console.log(this.post);
  //     })      
  //   alert(`Your form has been submitted`);
  //   this.postForm.reset();
  //   } else {
  //     alert('Input field(s) can not be empty');
  //   }
  // }

}
