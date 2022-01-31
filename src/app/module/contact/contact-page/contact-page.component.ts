import { Component, OnInit } from '@angular/core';
import { CuisinesService } from 'src/app/services/cuisines.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})


export class ContactPageComponent implements OnInit {


  constructor(private cuisine: CuisinesService, private formBuilder: FormBuilder,) { }

  post: any = []

  checkoutForm = this.formBuilder.group({
    userId: '',
    title: '',
    body: ''
  });

  ngOnInit() {
    // this.sendPost();
  }

  sendPost() {
    this.cuisine.create(JSON.stringify(this.checkoutForm.value)).subscribe(data => {
      this.post = data;
      console.log(this.post);
    })
  }

  onSubmit(): void {
  this.sendPost();
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
