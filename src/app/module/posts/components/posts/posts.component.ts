import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  
  updatedData = {
    id: 1,
    userId: 190,
    title: 'hahhsh',
    body: 'hajsjsjhhsh'
  }

  constructor(private posts: PostsService, private formBuilder: FormBuilder,) { }

  // post: any = []
  // postForm: FormGroup = this.formBuilder.group({
  //   userId: '',
  //   title: '',
  //   body: ''
  // });
  
  ngOnInit() {
    
  }
  
  @Output() updatedPost = new EventEmitter<Object>();

  @Input() set post(data:any){
    this.updatedData = Object.assign({}, data)
    }

  updatePost() {
    this.updatedPost.emit(this.updatedData);
    // if (this.postForm.value.userId !== '' || this.postForm.value.title !== '' || this.postForm.value.body !== '') {
    //   this.posts.create(JSON.stringify(this.postForm.value)).subscribe(data => {
    //     // this.post = data;
    //     // console.log(this.post);
    //   })      
    // alert(`Your form has been submitted`);
    // this.postForm.reset();
    // } else {
    //   alert('Input field(s) can not be empty');
    // }
  }


}
