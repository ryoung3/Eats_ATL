import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
