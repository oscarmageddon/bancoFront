import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userLogin } from 'src/app/interfaces/user-login.interface';
import { userSignup } from 'src/app/interfaces/user-signup.interface';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  roles: string[] = ['ADMIN', 'EXECUTIVE'];

  lgnErr: string = '';
  sgupMssg: string = '';
  sgupError: boolean = false;

  repeatedPass: string = '';

  userSignup: userSignup = {
    username: '',
    password: '',
    roles: [],
    fullname: ''
  };

  userLogin: userLogin = {
    username: '',
    password: ''
  };

  signUpUser() {
    this.lgnErr = '';
    if (this.userSignup.password.length > 0 && this.userSignup.fullname.length > 0 && this.userSignup.username.length > 0) {
      if (this.userSignup.password === this.repeatedPass) {
        if (this.userSignup.username.length > 2 && this.userSignup.password.length > 4 && this.userSignup.password.length < 41) {
          this.userSignup.roles = ["ADMIN"];
          this.loginservice.saveUser(this.userSignup)
            .subscribe({
              next: (resp) => {
                this.userSignup = {
                  username: '',
                  password: '',
                  roles: [],
                  fullname: ''
                };
                this.repeatedPass = '';
                this.sgupError = false;
                this.sgupMssg = 'User created successfully';
              },
              error: (err) => {
                this.sgupError = true;
                this.sgupMssg = 'User already exists';
              }
            });
        } else {
          this.sgupError = true;
          this.sgupMssg = 'Username must contain at least 3 characters and password must contain at least 5';
        }
      } else {
        this.sgupError = true;
        this.sgupMssg = 'Passwords does not match';
      }
    } else {
      this.sgupError = true;
      this.sgupMssg = 'There should be no empty fields';
    }
  }

  logInUser() {
    this.sgupError = false;
    this.sgupMssg = '';
    if (this.userLogin.username.length > 0 && this.userLogin.password.length > 0) {
      this.activatedRoute.params.subscribe(console.log);
      this.loginservice.loginUser(this.userLogin)
        .subscribe({
          next: (resp) => {
            console.log('resp:', resp);
            this.lgnErr = '';
            this.router.navigateByUrl('auth/registroclientes');
          },
          error: (error: HttpErrorResponse) => {
            console.log('error:', error);
            this.lgnErr = 'Invalid credentials';
            this.userLogin.password = '';
            this.userLogin.username = '';
          }
        });
    }
  }
}
