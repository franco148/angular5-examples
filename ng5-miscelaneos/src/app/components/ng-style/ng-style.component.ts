import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!--<p style="font-size: 10px;">-->
    <!--<p [ngStyle]="{ 'font-size': fontSize20 + 'px', 'color': 'red' }">-->
    <!--<p [style.fontSize]="'40px'">-->
    <p [style.fontSize.px]="fontSize20">
      ng-style works!
    </p>

    <button class="btn btn-primary" (click)="fontSize20 = fontSize20 + 5">
      <i class="fa fa-plus"></i>
      Increment font-size by 5px
    </button>

    <button class="btn btn-danger" (click)="fontSize20 = fontSize20 - 5">
      <i class="fa fa-minus"></i>
      Decrease font-size by 5px
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  fontSize20:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
