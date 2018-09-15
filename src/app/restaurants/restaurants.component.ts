import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

    restaurantName: String = "Jack In The Box";
    address: String = "1234 Globbin Street";
    description: String = "This restaurant is known for its delicious burgers and fries";
    rating: any = "5 star rating";
    customerReview: String = "This place is awesome! ";
  
    constructor() { }

  ngOnInit() {
  }

}
