import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisinesRoutingModule } from './cuisines-routing.module';
import { CuisinesPageComponent } from './cuisines-page/cuisines-page.component';


@NgModule({
  declarations: [
    CuisinesPageComponent
  ],
  imports: [
    CommonModule,
    CuisinesRoutingModule
  ]
})
export class CuisinesModule { }
