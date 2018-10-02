import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AgmCoreModule,GoogleMapsAPIWrapper } from '@agm/core';
import { restaurantsService } from "src/app/restaurants/restaurants.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    })
  ],
  providers: [restaurantsService,
    GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
