import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { userLogin } from 'src/app/interfaces/user-login.interface';
import { userSignup } from 'src/app/interfaces/user-signup.interface';
import { environment } from 'src/environments/environment';
import { Auth } from '../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.loginBaseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth }
  }

  constructor(private http: HttpClient) { }

  isLoged(): Observable<boolean> {
    if ( !localStorage.getItem('id')) {
      return of(false);
    }
    // verificar en BD si id de usuario existe
    // ver 226 5:30
    return of( true );
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('id');
    localStorage.removeItem('fullname');
    localStorage.removeItem('username');
    localStorage.removeItem('rol1');
  }

  saveUser(usr: userSignup): Observable<userSignup> {
    return this.http.post<userSignup>(`${this.baseUrl}/`, usr);
  }

  loginUser(lgn: userLogin): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/signin`, lgn)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('id', auth.id)),
        tap(auth => localStorage.setItem('fullname', auth.fullname)),
        tap(auth => localStorage.setItem('username', auth.username)),
        tap(auth => localStorage.setItem('rol1', auth.roles[0].name))
      );
  }
}
