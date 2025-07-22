import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  imports:[CurrencyPipe,RouterLink],
})
export class ProductCard {
  @Input() product!: Product;

  getstarArray(): number[] {
    return Array.from({ length: this.product.rating});
  }
}
