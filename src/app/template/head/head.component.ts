import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/interfaces/auth.interface';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private login: LoginService,
              private router: Router) { }

  ngOnInit() { }

  get auth(): Auth {
    return this.login.auth;
  }

  logout() {
    this.login.logout();
    this.router.navigateByUrl('');
  }

}
