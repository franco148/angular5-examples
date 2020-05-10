import { Component, OnInit } from '@angular/core';

import { ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

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

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const newData = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];

      this.lineChartData = [
        { data: newData, label: 'Sales' }
      ];
    }, 3000);
  }

}
