import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './components/hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PopularComponent } from './components/popular/popular.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';


@NgModule({
  declarations: [
    HeroComponent,
    HomePageComponent,
    AboutComponent,
    ServicesComponent,
    PopularComponent,
    TestimonialsComponent,
    TestimonialCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
