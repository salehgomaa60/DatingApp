import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://localhost:5001/api/Auth/";
  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'Login', model).pipe(
      map((response: any) => {
        const User = response;
        if (User) {
          localStorage.setItem('token', User.token)
        }
      })
    )
  }
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

}
