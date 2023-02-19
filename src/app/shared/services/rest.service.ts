import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public baseUrl: string = "http://localhost:8080/api";

  constructor(@Inject(HttpClient) public httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    () => new Error ('Something bad happened; please try again later.'));
  }

  private static getHeaders(): HttpHeaders {
    return new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': 'Basic dXNlcjE6dXNlcjFQd2Q='
    });
  }

  public get(url: string): Observable<any> {
    let headers = RestService.getHeaders();
    const httpOptions = {headers: headers};
    return this.httpClient.get(this.baseUrl + url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
