import { Component, OnInit } from '@angular/core';

import * as mapboxgl from "mapbox-gl";

import { Place } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.css']
})
export class BoxmapComponent implements OnInit {

  map: mapboxgl.Map;

  places: Place[] = [{
    id: '1',
    name: 'Fernando',
    lng: -75.75512993582937,
    lat: 45.349977429009954,
    color: '#dd8fee'
  },
  {
    id: '2',
    name: 'Amy',
    lng: -75.75195645527508,
    lat: 45.351584045823756,
    color: '#790af0'
  },
  {
    id: '3',
    name: 'Orlando',
    lng: -75.75900589557777,
    lat: 45.34794635758547,
    color: '#19884b'
  }];

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

    for (const marker of this.places) {
      this.addMarker(marker);
    }
  }

  addMarker(place: Place) {

    const popupHtml = `<h2>${place.name}</h2>
                       <br>
                       <button>Remove</button>`;

    const customPopup = new mapboxgl.Popup({
      offset: 25,
      closeOnClick: false
    }).setHTML(popupHtml);

    const marker = new mapboxgl.Marker({
      draggable: true,
      color: place.color
    })
    .setLngLat([place.lng, place.lat])
    .setPopup(customPopup)
    .addTo(this.map);
  }
}
