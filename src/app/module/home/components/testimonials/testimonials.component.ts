import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
    name: 'Jane Doe',
    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste, quis nam, sapiente omnis tempora ea necessitatibus, tempore consequatur illum quaerat? Harum numquam sequi dignissimos.'
  },
    {
    name: 'Melina Dan',
    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste, quis nam, sapiente omnis tempora ea necessitatibus, tempore consequatur illum quaerat? Harum numquam sequi dignissimos.'
  },
    {
    name: 'Elon Musk',
    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste, quis nam, sapiente omnis tempora ea necessitatibus, tempore consequatur illum quaerat? Harum numquam sequi dignissimos.'
  },
    {
    name: 'Bad Girl Riri',
    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste, quis nam, sapiente omnis tempora ea necessitatibus, tempore consequatur illum quaerat? Harum numquam sequi dignissimos.'
  },
    {
    name: 'Bill Gates',
    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste, quis nam, sapiente omnis tempora ea necessitatibus, tempore consequatur illum quaerat? Harum numquam sequi dignissimos.'
  },
];

  testimonialIndex: number = 0;
  totalTestimonies: number = this.testimonials.length - 1;

  slideReview(index: any) {
    this.testimonialIndex = Number(index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
