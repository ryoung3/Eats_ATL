import { Injectable } from '@angular/core';
import { yelp } from 'yelp-fusion';
import { HttpClient } from '@angular/common/http';
import { IRestaurants } from "src/app/restaurants/restaurants";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class restaurantsService{
  
  private yelp_URL = 'api/restaurants/YelpResturants.json';
  restaurants: any[];
  constructor(private http: HttpClient){
    
  }
 
  getRestaurants(): Observable<IRestaurants[]> {
    return this.http.get<IRestaurants[]>(this.yelp_URL).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
    
    

