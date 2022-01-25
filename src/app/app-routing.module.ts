import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./module/about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./module/contact/contact.module').then( m => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
