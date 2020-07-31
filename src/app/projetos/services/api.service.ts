import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usersUrl = 'https://api.github.com/users';

  constructor( private httpClient: HttpClientModule, private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProfile() {
    return this.http.get(`https://api.github.com/users/`);
  }
}
