import { Component, OnInit } from '@angular/core';

import * as mapboxgl from "mapbox-gl";

import { Place } from 'src/app/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

interface MarkersDto {
  [key: string]: Place
}

@Component({
  selector: 'app-boxmap',
  templateUrl: './boxmap.component.html',
  styleUrls: ['./boxmap.component.css']
})
export class BoxmapComponent implements OnInit {

  map: mapboxgl.Map;

  // places: Place[] = [];
  places: MarkersDto = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<MarkersDto>('http://localhost:5050/map').subscribe(placesResponse => {
      console.log(placesResponse);
      this.places = placesResponse;
      this.createMap();
    });
  }

  listenSockets() {
    // new marker

    // move marker

    // remove marker
  }

  createMap() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiZnJhbmNvZnJhbCIsImEiOiJja2EzOTkydTQwbTkxM25xa3J6bThmb2hmIn0.UghzC-hUNQPAjKOt794qhA';
    this.map = new mapboxgl.Map({
      container: 'boxmap',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.75512993582937, 45.349977429009954],
      zoom: 15.8
    });

    // for (const marker of this.places) {
    //   this.addMarker(marker);
    // }

    for (const [key, marker] of Object.entries(this.places)) {
      this.addMarker(marker);
    }
  }

  addMarker(place: Place) {

    // const popupHtml = `<h2>${place.name}</h2>
    //                    <br>
    //                    <button>Remove</button>`;

    const h2 = document.createElement('h2');
    h2.innerText = place.name;

    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'Remove';

    const div = document.createElement('div');
    div.append(h2, btnRemove);

    const customPopup = new mapboxgl.Popup({
      offset: 25,
      closeOnClick: false
    // }).setHTML(popupHtml);
    }).setDOMContent(div);

    const marker = new mapboxgl.Marker({
      draggable: true,
      color: place.color
    })
    .setLngLat([place.lng, place.lat])
    .setPopup(customPopup)
    .addTo(this.map);

    marker.on('drag', ()=> {
      const lngLat = marker.getLngLat();
      console.log(lngLat);

      // TODO: Send notification when dragging a marker
    });

    btnRemove.addEventListener('click', () => {
      marker.remove();
      // TODO: Send notification when removing a marker.
    });
  }

  createMarker() {
    const newMarker: Place = {
      id: new Date().toISOString(),
      lng: -75.75512993582937,
      lat: 45.349977429009954,
      name: 'NO name',
      color: '#' + Math.floor(Math.random()*16777215).toString(16)
    };

    this.addMarker(newMarker);
  }
}
