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

    constructor(private restaurantsService: restaurantsService){
        
     }

  ngOnInit() {
    this.restaurants = this.restaurantsService.getRestaurants();
  }

}
