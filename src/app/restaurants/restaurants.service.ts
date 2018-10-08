import { Injectable } from '@angular/core';
import { yelp } from 'yelp-fusion';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class restaurantsService{
  
  yelp_URL: String;
  restaurants: any[];
  constructor(private http: HttpClient){
    
  }
 

  getRestaurants(){
        return this.restaurants;
    }
    
    
}
