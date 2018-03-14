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
    email: null
  }

  constructor() { }

  save(myForm:NgForm) {
    console.log("Form has been saved.");
    console.log(myForm);
  }

}
