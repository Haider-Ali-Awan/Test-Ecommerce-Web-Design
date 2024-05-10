import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './RoutePages/product-page/product-page.component';
import { HomeComponent } from './Home/home/home.component';
import { BlogPageComponent } from './RoutePages/blog-page/blog-page.component';
import { BlogsComponent } from './Home/blogs/blogs.component';
import { PageComponent } from './RoutePages/page/page.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  

  {

    path:'home',
    component:HomeComponent,
  },
 
  {

    path:'products',
    component:ProductPageComponent,
  },

  {

    path:'blogs',
    component:BlogsComponent,
  },


  {

    path:'pages',
    component:PageComponent,
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
