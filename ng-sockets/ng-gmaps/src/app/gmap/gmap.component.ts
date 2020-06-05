import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit, AfterViewInit {

  @ViewChild('gmap') gmapElement: ElementRef;
  gmap: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    // this.loadGMap();
  }

  loadGMap() {
    const latLng = new google.maps.LatLng(37.784679, -122.395936);

    const optionsGMap: google.maps.MapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // console.log(this.gmapElement);
    this.gmap = new google.maps.Map(this.gmapElement.nativeElement, optionsGMap);
  }

  ngAfterViewInit() {
    console.log('AAA   ', this.gmapElement.nativeElement);
    this.loadGMap();
  }

}
