import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) {}
  showLoginForm = false;
  userNotFoundError = '';
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: SignUp): void {
    this.seller.userSignUp(data);
  }
  logIn(data: SignUp): void {
    this.seller.userLogIn(data);
    this.seller.isuserNotFoundError.subscribe((isError: boolean) => {
      if (isError) {
        this.userNotFoundError = 'Oops! User not found. Please try again';
      }
    });
  }

  openLogIn() {
    this.showLoginForm = true;
  }
  openSignUp() {
    this.showLoginForm = false;
  }
}
