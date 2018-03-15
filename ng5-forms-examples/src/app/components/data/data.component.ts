import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//For using data aproximation feature we need to import ReactiveFormsModule in ap.module.ts
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  dataForm:FormGroup;

  constructor() {
    this.dataForm = new FormGroup({
      'name': new FormControl('Franco'), //second parameter for validation rules, third async validation
      'lastName': new FormControl('Arratia'),
      'email': new FormControl()
    });
  }

  saveChanges() {
    console.log(this.dataForm.value);
  }

}
