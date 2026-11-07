import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LoginResponse {
  valid: boolean;
  token: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  login(
    username: string,
    password: string
  ): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/auth/verify`,
      {
        username,
        password
      }
    );

  }


  logout(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.clear();
  }


  isAuthenticated(): boolean {

    return !!localStorage.getItem('token');

  }

}
