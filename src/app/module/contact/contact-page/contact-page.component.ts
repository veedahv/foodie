import { Component, OnInit } from '@angular/core';
import { CuisinesService } from 'src/app/services/cuisines.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})


export class ContactPageComponent implements OnInit {


  constructor(private cuisine: CuisinesService, private formBuilder: FormBuilder,) { }

  post: any = []
  checkoutForm: FormGroup = this.formBuilder.group({
    userId: ['', Validators.required],
    title: '',
    body: ''
  });
  // userId: new FormControl(RequiredValidator),
  
  ngOnInit() {
    // this.sendPost();
      // this.checkoutForm = this.formBuilder.group({
      //   userId: ['', Validators.required],
      //   title: '',
      //   body: ''
      // });
  }

  sendPost() {
    // let countrySelected = this.checkoutForm.get('userId').value;
    // if(countrySelected === 'B') {
    //   this.checkoutForm.get('county').setValidators([Validators.required]); // 5.Set Required Validator
    //   this.checkoutForm.get('county').updateValueAndValidity();
    // } else {
    //   this.checkoutForm.get('county').clearValidators(); // 6. Clear All Validators
    //   this.checkoutForm.get('county').updateValueAndValidity();
    // }
    if (this.checkoutForm.value.userId !== '' || this.checkoutForm.value.title !== '' || this.checkoutForm.value.body !== '') {
      this.cuisine.create(JSON.stringify(this.checkoutForm.value)).subscribe(data => {
        this.post = data;
        console.log(this.post);
      })      
    } else {
      alert('Input field(s) can not be empty');
    }
  }

  onSubmit(): void {
  this.sendPost();
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
