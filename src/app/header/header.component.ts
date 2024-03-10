import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sellerName: string = '';
  menuType = 'default';
  searchText: string = '';
  products: product[] | undefined = [];
  userName: string = '';
  constructor(private route: Router, private product: ProductsService) {}
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          this.menuType = 'seller';
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
        } else if (localStorage.getItem('user')) {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'user';
        } else {
          this.menuType = 'default';
        }
      }
    });
    this.filterProduct();
  }

  logout() {
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }
  userLogOut() {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }
  filterProduct() {
    this.product.searchProducts().subscribe((result) => {
      if (result) {
        result.length = 5;
        this.products = result;
      }
    });
  }
  hideText() {
    this.products = undefined;
  }
  submitSearchQuery(val: string) {
    this.route.navigate([`search/${val}`]);
  }
  redirectToDetails(id: number) {
    this.route.navigate(['/details/' + id]);
  }
}
