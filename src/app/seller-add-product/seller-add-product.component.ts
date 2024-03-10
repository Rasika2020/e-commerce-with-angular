import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  productAdditionMessage: string | undefined;
  constructor(private product: ProductsService) {}
  newProduct(data: product) {
    this.product.addNewProduct(data).subscribe((result) => {
      console.warn('Product added successfully', result);
      if (result) {
        this.productAdditionMessage = 'Product added successfully';
      }
      setTimeout(() => {
        this.productAdditionMessage = undefined;
      }, 3000);
    });
  }
}
