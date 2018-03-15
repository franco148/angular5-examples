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

  user:any = {
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
    // Second change: This can be improved.
    // this.dataForm = new FormGroup({
    //   'fullName': new FormGroup({
    //     'name': new FormControl(this.user.fullName.name, [
    //                   Validators.required,
    //                   Validators.minLength(3)
    //                 ]), //second parameter for validation rules, third async validation
    //     'lastName': new FormControl(this.user.fullName.lastName, Validators.required)
    //   }),
    //   'email': new FormControl(this.user.email, [
    //                 Validators.required,
    //                 Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    //               ])
    // });

    //Improving previous approach. The following works if the object has the same structure
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

    this.dataForm.setValue(this.user);

  }

  saveChanges() {
    console.log(this.dataForm.value);
    console.log(this.dataForm);

    //The following code is for cleaning our form, and it is going to have the initial statuses of its properties.
    //this.dataForm.reset({adding object's properties}); or the following
    this.dataForm.reset(this.user);

    //Another approach would be, but it is not good.
    //this.dataForm.controls['email'].setValue('something');
  }

}
