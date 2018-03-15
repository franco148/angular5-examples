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

  user:Object = {
    fullName: {
      name: "Franco",
      lastName: "Arratia"
    },
    email: "franck_ral@hotmail.com"
  }

  constructor() {

    // this.dataForm = new FormGroup({
    //   'name': new FormControl('', [
    //                 Validators.required,
    //                 Validators.minLength(3)
    //               ]), //second parameter for validation rules, third async validation
    //   'lastName': new FormControl('', Validators.required),
    //   'email': new FormControl('', [
    //                 Validators.required,
    //                 Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    //               ])
    // });

    // If I need to work with a little more complex objects.
    this.dataForm = new FormGroup({
      'fullName': new FormGroup({
        'name': new FormControl('', [
                      Validators.required,
                      Validators.minLength(3)
                    ]), //second parameter for validation rules, third async validation
        'lastName': new FormControl('', Validators.required)
      }),
      'email': new FormControl('', [
                    Validators.required,
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                  ])
    });
  }

  saveChanges() {
    console.log(this.dataForm.value);
    console.log(this.dataForm);
  }

}
