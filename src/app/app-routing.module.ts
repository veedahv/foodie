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
    path: 'cuisines',
    loadChildren: () => import('./module/cuisines/cuisines.module').then( m => m.CuisinesModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./module/cart/cart.module').then( m => m.CartModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./module/contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./module/posts/posts.module').then( m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
