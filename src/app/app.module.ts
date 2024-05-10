import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { SliderComponent } from './Home/slider/slider.component';
import { PopularCategoriesComponent } from './Home/popular-categories/popular-categories.component';
import { PopularProductsComponent } from './Home/popular-products/popular-products.component';
import { OfferComponent } from './Home/offer/offer.component';
import { BlogsComponent } from './Home/blogs/blogs.component';
import { HotSaleTopProductsComponent } from './Home/hot-sale-top-products/hot-sale-top-products.component';
import { FooterComponent } from './Home/footer/footer.component';
import { ProductPageComponent } from './RoutePages/product-page/product-page.component';
import { HomeComponent } from './Home/home/home.component';
import { BlogPageComponent } from './RoutePages/blog-page/blog-page.component';
import { PageComponent } from './RoutePages/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    PopularCategoriesComponent,
    PopularProductsComponent,
    OfferComponent,
    HotSaleTopProductsComponent,
    BlogsComponent,
    FooterComponent,
    ProductPageComponent,
    HomeComponent,
    BlogPageComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
