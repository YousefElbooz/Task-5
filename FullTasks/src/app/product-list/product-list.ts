import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductCard } from "../product-card/product-card";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [ProductCard]
})
export class ProductList {
  products: Product[] = [
  {
    "id": 1,
    "name": "Essence Mascara Lash Princess",
    "price": 9.99,
    "stock": 99,
    "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "rate": 2.56
  },
  {
    "id": 2,
    "name": "Eyeshadow Palette with Mirror",
    "price": 19.99,
    "stock": 34,
    "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "rate": 2.86
  },
  {
    "id": 3,
    "name": "Powder Canister",
    "price": 14.99,
    "stock": 89,
    "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "rate": 4.64
  },
  {
    "id": 4,
    "name": "Red Lipstick",
    "price": 12.99,
    "stock": 91,
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    "rate": 4.36
  },
  {
    "id": 5,
    "name": "Red Nail Polish",
    "price": 8.99,
    "stock": 79,
    "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    "rate": 4.32
  },{
    "id": 6,
    "name": "Calvin Klein CK One",
    "price": 49.99,
    "stock": 29,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    "rate": 4.37
  },
  {
    "id": 7,
    "name": "Chanel Coco Noir Eau De",
    "price": 129.99,
    "stock": 58,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    "rate": 4.26
  },
  {
    "id": 8,
    "name": "Dior J'adore",
    "price": 89.99,
    "stock": 98,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    "rate": 3.8
  },
  {
    "id": 9,
    "name": "Dolce Shine Eau de",
    "price": 69.99,
    "stock": 4,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    "rate": 3.96
  },
  {
    "id": 10,
    "name": "Gucci Bloom Eau de",
    "price": 79.99,
    "stock": 91,
    "image": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    "rate": 2.74
  },
  {
    "id": 11,
    "name": "Annibale Colombo Bed",
    "price": 1899.99,
    "stock": 88,
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    "rate": 4.77
  },
  {
    "id": 12,
    "name": "Annibale Colombo Sofa",
    "price": 2499.99,
    "stock": 60,
    "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    "rate": 3.92
  },
  {
    "id": 13,
    "name": "Bedside Table African Cherry",
    "price": 299.99,
    "stock": 64,
    "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    "rate": 2.87
  },
  {
    "id": 14,
    "name": "Knoll Saarinen Executive Conference Chair",
    "price": 499.99,
    "stock": 26,
    "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    "rate": 4.88
  },
  {
    "id": 15,
    "name": "Wooden Bathroom Sink With Mirror",
    "price": 799.99,
    "stock": 7,
    "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    "rate": 3.59
  }
]

}
