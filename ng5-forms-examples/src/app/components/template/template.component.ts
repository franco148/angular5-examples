import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  user: Object = {
    name: "Franco",
    lastName: "Arratia",
    email: ""
  }

  constructor() { }

  save(myForm:NgForm) {
    console.log("Form has been saved.");
    console.log(myForm);
  }

}
