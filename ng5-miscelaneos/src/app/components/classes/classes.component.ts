import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

  alertType:string = "alert-danger";
  textDanger:boolean = false;

  properties:Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

}
