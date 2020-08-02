import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User, Repositorio } from './../models/';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  url = 'https://api.github.com/users';

  constructor( private httpClient: HttpClient ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/vnd.github.v3+json', 'User-Agent': 'guilhermelcs' })
  }

  listarUsuarios(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + '?per_page=30')
      .pipe(retry(2), catchError(this.handleError));
  }

  listarUsuarioPorLogin(login: string): Observable<User> {
    return this.httpClient.get<User>(this.url + '/' + login)
      .pipe( retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  listarRepositorios( login: string ): Observable<Repositorio[]> {
    return this.httpClient.get<Repositorio[]>(this.url + '/' + login + '/repos')
      .pipe(retry(3), catchError(this.handleError));
  }
}
