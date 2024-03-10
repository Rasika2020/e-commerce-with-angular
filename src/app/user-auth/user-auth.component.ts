import { Component, OnInit } from '@angular/core';
import { LogIn, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  showLogin = false;
  invalidcredentialserr: string = '';
  constructor(private user: UserService) {}
  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data: SignUp) {
    this.user.userSignUp(data);
  }
  logIn(data: LogIn) {
    this.user.userLogin(data);
    this.user.invalidUser.subscribe((result) => {
      if (result) {
        this.invalidcredentialserr = 'Please enter valid email and password';
      }
    });
  }
  openLogIn() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
