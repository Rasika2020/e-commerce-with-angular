import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularProduct: undefined | product[];
  trendyProduct: undefined | product[];
  constructor(private product: ProductsService) {}

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data) => {
      this.popularProduct = data;
    });
    this.product.trendyProducts().subscribe((data) => {
      this.trendyProduct = data;
    });
  }
}
