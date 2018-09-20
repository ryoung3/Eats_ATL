import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AgmCoreModule } from '@agm/core';
import { restaurantsService } from "src/app/restaurants/restaurants.service";
@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    })
  ],
  providers: [restaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
