import { Component,Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';



@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent {
 
  title: string = 'My first AGM project';
  lat: number = 33.753746;
  lng: number = -84.386330;


}
