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

  ngOnInit() {

  }

  @Output() updatedPost = new EventEmitter<Object>();
  @Output() cancelPost = new EventEmitter<Boolean>();

  @Input() set post(data: any) {
    this.updatedData = Object.assign({}, data)
  }
  @Input() postIndex: number = 0;

  cancelEdit() {
    this.cancelPost.emit(false);
    console.log('cancel');
    
  }
  updatePost() {
    console.log('update');
    // if (this.postForm.value.userId !== '' || this.postForm.value.title !== '' || this.postForm.value.body !== '') {
      this.posts.update(this.updatedData).subscribe(data => {
        this.updatedPost.emit(this.updatedData);
        this.cancelPost.emit(false);
        console.log(data);
      })      
    // alert(`Your form has been submitted`);
    // this.postForm.reset();
    // } else {
    //   alert('Input field(s) can not be empty');
    // }
  }


}
