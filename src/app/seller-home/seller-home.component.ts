import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  deletionMessage: undefined | string;
  icon = faTrash;
  edit = faEdit;
  constructor(private product: ProductsService) {}
  ngOnInit() {
    this.list();
  }
  deleteproduct(id: number) {
    this.product.deleteSelectedProduct(id).subscribe((product) => {
      if (product) {
        console.warn('Product deleted', product);
        this.deletionMessage = 'Product has been successfully deleted';
        this.list();
      }
    });

    setTimeout(() => {
      this.deletionMessage = undefined;
    }, 3000);
  }

  list() {
    this.product.productList().subscribe((list) => {
      this.productList = list;
    });
  }
}
