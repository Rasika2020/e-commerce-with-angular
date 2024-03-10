import { CanActivateFn } from '@angular/router';
import { Inject } from '@angular/core';
import { SellerService } from './services/seller.service';
export const authGuard: CanActivateFn = (route, state) => {
  const sellerSErvice: SellerService = Inject(SellerService);

  if (localStorage.getItem('seller')) {
    return true;
  }
  return sellerSErvice.isSellerLoggedIn;
};
