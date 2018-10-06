import { Component, OnInit } from '@angular/core';
import { restaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
    restaurants: any[];
    restaurants2: any;
    yelpURL: String = 'https://api.yelp.com/v3/businesses/search';
    yelpClientKey: String = 'koLImfX2STvD3TaBlzzvrtE5ZShAdLiNlXf-7hBHg7gNW1Xl1zdMFvVkaqWGsaYUxKcCwpfcirRo74Wa6jod1GZjjL9gN8wP-hFi75N3E9j2eXNFpPLO5uS_YUyoW3Yx';
    yelpClientID: String = 'NvTy79AUn_ne6VIkVBztEQ';

    constructor(private restaurantsService: restaurantsService){
        
     }

  ngOnInit() {
    this.restaurants = this.restaurantsService.getRestaurants();
  }

  searchYelpAPI(){

  }
}
