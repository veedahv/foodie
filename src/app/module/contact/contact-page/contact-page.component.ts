import { Component, OnInit } from '@angular/core';
import { CuisinesService } from 'src/app/services/cuisines.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})


export class ContactPageComponent implements OnInit {


  constructor(private cuisine: CuisinesService, private formBuilder: FormBuilder,) { }

  post: any = []
  postForm: FormGroup = this.formBuilder.group({
    userId: '',
    title: '',
    body: ''
  });
  
  ngOnInit() {
    
  }

  sendPost() {
    if (this.postForm.value.userId !== '' || this.postForm.value.title !== '' || this.postForm.value.body !== '') {
      this.cuisine.create(JSON.stringify(this.postForm.value)).subscribe(data => {
        this.post = data;
        console.log(this.post);
      })      
    alert(`Your form has been submitted`);
    this.postForm.reset();
    } else {
      alert('Input field(s) can not be empty');
    }
  }

}
