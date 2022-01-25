import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as  from 'events';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  index: number = 0;
  disablePrev: boolean = true;
  disableNext: boolean = false;

  @Input() totalTestimonies = 0;

  @Input() testimony = {
    name: 'mm',
    testimony: 'hahhsh'
  }

  // @Output() open: EventEmitter
  @Output() backward = new EventEmitter<number>();
  @Output() forward = new EventEmitter<number>();


  // @Output() newItemEvent = new EventEmitter<string>();

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  // @Output() newItemEvent = new EventEmitter<string>();

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  prev() {
    // console.log('the index is', this.index);
    this.index -= 1;
    this.backward.emit(this.index);
    this.index <= 0 ? this.disablePrev = true : this.disablePrev = false;
    this.index >= this.totalTestimonies ? this.disableNext = true : this.disableNext = false;
  }
  next() {
    this.index += 1;
    this.forward.emit(this.index)
    this.index <= 0 ? this.disablePrev = true : this.disablePrev = false;
    this.index >= this.totalTestimonies ? this.disableNext = true : this.disableNext = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
