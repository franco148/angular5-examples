import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe(result => this.countries = result);
  }

  dropEvent(event: CdkDragDrop<any>) {
    // console.log('OK', event);
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
  }
}
