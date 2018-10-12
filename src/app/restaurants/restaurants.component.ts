import { Component, OnInit } from '@angular/core';
import { restaurantsService } from './restaurants.service';
import { IRestaurants } from "src/app/restaurants/restaurants";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
    restaurants: any[];
    restaurants2: any;
    RestaurantsList: IRestaurants[];

    constructor(private restaurantsService: restaurantsService){
        
     }

  ngOnInit() {
    this.RestaurantsList = this.restaurantsService.getRestaurants();
  }

  searchYelpAPI(){

  }
}
