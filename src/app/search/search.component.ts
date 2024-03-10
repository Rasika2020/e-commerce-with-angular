import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: product[] | undefined = [];
  searchResult: product[] | undefined = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductsService
  ) {}

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    if (query) {
      console.warn('Search', query);
      this.product.searchProducts().subscribe((result) => {
        if (result) {
          console.warn('Search q', result);
          //result.length = 5;
          this.products = result;
          this.searchResult =
            this.products &&
            result.filter((it: any) => {
              return (
                it.category.toLowerCase().includes(query) ||
                it.price.toLowerCase().includes(query) ||
                it.color.toLowerCase().includes(query) ||
                it.description.toLowerCase().includes(query) ||
                it.name.toLowerCase().includes(query)
              );
            });
          console.warn('Search', this.searchResult);
        }
      });
    }
  }
}
