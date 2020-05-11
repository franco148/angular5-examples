import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  constructor(private http: HttpClient, private wsService: WebsocketService) {

  }

  ngOnInit(): void {
    // setInterval(() => {
    //   const newData = [
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100),
    //     Math.round(Math.random() * 100)
    //   ];

    //   this.lineChartData = [
    //     { data: newData, label: 'Sales' }
    //   ];
    // }, 3000);

    this.getGraphicData();
    this.listenSocket();
  }

  getGraphicData() {
    this.http.get('http://localhost:5050/graphic')
        .subscribe((data: any) => {
          // console.log(data);
          this.lineChartData = data;
        });
  }

  listenSocket() {
    this.wsService.listen('change-graphic-data').subscribe((data: any) => {
      console.log('socket', data);
      this.lineChartData = data;
    });
  }
}
