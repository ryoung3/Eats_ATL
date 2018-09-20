import { Injectable } from '@angular/core';

@Injectable()
export class restaurantsService{

    getRestaurants(){
        return this.restaurants;
    }
 restaurants = [{
    name: "Chruches",
    address: "1234 Jackson Street",
    description: "chicken joint",
    rating: "5 stars",
    customerReview: "good food"
  },

  {
    name: "Blondies",
    address: "4567 James Street",
    description: "dessert joint",
    rating: "5 stars",
    customerReview: "good food"
  },

  {
    name: "Chitpole",
    address: "2389 Peachtree Street",
    description: "mexican food",
    rating: "5 stars",
    customerReview: "good food"
  },

  {
    name: "Atlanta Tech Village",
    address: "3456 Piedmont Road",
    description: "innovation center",
    rating: "5 stars",
    customerReview: "great place to learn"
  }];

    
    
}