import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eats-ATL-app';

  searchRestaurants():void {
      alert("This search button was clicked ! ");
  }
}
