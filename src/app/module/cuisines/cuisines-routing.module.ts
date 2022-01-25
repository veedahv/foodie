import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisinesPageComponent } from './cuisines-page/cuisines-page.component';

const routes: Routes = [
  {
    path: '',
    component: CuisinesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisinesRoutingModule { }
