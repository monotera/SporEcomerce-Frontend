import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const formHeaders = new HttpHeaders();
    formHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const formParams = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post('http://localhost:8080/login', null, {
      headers: formHeaders,
      params: formParams,
      withCredentials: true,
    });
  }

  getPlayer() {
    return this.http.get('http://localhost:8080/player/log-player', {
      withCredentials: true,
    });
  }
  logout() {
    return this.http.post('http://localhost:8080/logout', '', {
      withCredentials: true,
    });
  }
}
