import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  standalone: true,
  imports: [CommonModule, ProductCard]
})
export class ProductList implements OnInit {
  products: Product[] = [];
  isLoading = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch products:', err);
        this.isLoading = false;
      }
    });
  }
}
