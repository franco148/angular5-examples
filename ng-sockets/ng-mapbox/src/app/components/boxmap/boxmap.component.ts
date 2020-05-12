import { Component, OnInit } from '@angular/core';

import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.css']
})
export class BoxmapComponent implements OnInit {

  map: mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
    this.createMap();
  }

  createMap() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZnJhbmNvZnJhbCIsImEiOiJja2EzOTkydTQwbTkxM25xa3J6bThmb2hmIn0.UghzC-hUNQPAjKOt794qhA';
    this.map = new mapboxgl.Map({
      container: 'boxmap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.75512993582937, 45.349977429009954],
      zoom: 15.8
    });
  }
}
