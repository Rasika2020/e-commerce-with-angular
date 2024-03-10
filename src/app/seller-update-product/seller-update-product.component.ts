import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  productUpdateMessage: undefined | string;
  constructor(
    private route: ActivatedRoute,
    private product: ProductsService
  ) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.warn('data', data);
        this.productData = data;
      });
  }
  submit(id: any, data: product) {
    debugger;
    //this.product.updateProduct(id, data);
    this.product.updateProduct(id, data).subscribe((result) => {
      if (result) {
        console.warn('result', result);
        this.productUpdateMessage = 'Product is successfully updated';
      }
    });
  }
}
