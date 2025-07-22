import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  imports:[CurrencyPipe]
})
export class ProductCard {
  @Input() product!: Product;

  getstarArray(): number[] {
    return Array.from({ length: this.product.rating});
  }
}
