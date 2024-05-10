import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent {

  activeCategory: string = 'All'; 

  products = [
    { name: 'PATRIX', image: 'http://pngimg.com/uploads/headphones/headphones_PNG7647.png',
     description: "Experience crystal-clear sound quality with the Real Beat TRX headphones. These stylish headphones are designed to deliver an immersive audio experience.", 
     price: 100.00, category: 'patrix' },

     { name: 'SMARTWATCH', image: 'https://tse1.mm.bing.net/th?id=OIP.riCTChIJxQJn2CgpW3EFcAHaHa&pid=Api&P=0&h=220',
     description: "Experience crystal-clear sound quality with the Real Beat TRX headphones. These stylish headphones are designed to deliver an immersive audio experience.", 
     price: 120.00, category: 'smartwatch' },

     { name: 'SPEAKER', image: 'https://tse2.mm.bing.net/th?id=OIP.Ypc7LxfvGwTwPgooJWl6lwHaHa&pid=Api&P=0&h=220',
     description: "Experience crystal-clear sound quality with the Real Beat TRX headphones. These stylish headphones are designed to deliver an immersive audio experience.", 
     price: 90.00 ,category: 'speaker' },

     { name: 'LED', image: 'https://tse3.mm.bing.net/th?id=OIP.x-6fJMCI7rGCyLCKXBQ-kAHaHa&pid=Api&P=0&h=220',
     description: "Experience crystal-clear sound quality with the Real Beat TRX headphones. These stylish headphones are designed to deliver an immersive audio experience.", 
     price: 250.00, category: 'led' },

     { name: 'CARCHARGER', image: 'https://tse3.mm.bing.net/th?id=OIP.bz2GLA4I4PnqgMCSn_ls7AHaHa&pid=Api&P=0&h=220',
     description: "Experience crystal-clear sound quality with the Real Beat TRX headphones. These stylish headphones are designed to deliver an immersive audio experience.", 
     price: 250.00, category: 'carCharger' },
   

     
  ];

  filteredProducts = this.products;

  filterProducts(category: string) {
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
    this.activeCategory = category;
  }

  isActive(category: string): boolean {
    // Compare the current category with the active category
    return this.activeCategory === category;
}

}


