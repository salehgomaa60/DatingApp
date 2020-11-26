import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://localhost:5001/api/Auth/";
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'Login', model).pipe(
      map((response: any) => {
        const User = response;
        if (User) {
          localStorage.setItem('token', User.token);
          this.decodedToken = this.jwtHelper.decodeToken(User.token);
          console.log(this.decodedToken);
        }
      })
    )
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);

  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

}
