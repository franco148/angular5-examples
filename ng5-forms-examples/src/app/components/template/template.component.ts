import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  user: Object = {
    name: null,
    lastName: null,
    email: null,
    country: "BO",
    gender: "Male",
    accept: false
  }

  countries = [
    {
      code: "CRI",
      name: "Costa Rica"
    },
    {
      code: "BO",
      name: "Bolivia"
    }
  ];

  genders:string[] = ["Male", "Female", "Not defined"];

  constructor() { }

  save(myForm:NgForm) {
    console.log("Form has been saved.");
    console.log(myForm);
  }

}
