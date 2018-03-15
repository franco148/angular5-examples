import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';


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
    email: "franck_ral@hotmail.com",
    hobbies: ["run", "sleep", "eat"]
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
        'lastName': new FormControl('', [
                                          Validators.required,
                                          this.noSmithLastName
                                        ])
      }),
      'email': new FormControl('', [
                    Validators.required,
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                  ]),
      'hobbies': new FormArray([
        new FormControl('Run', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existUserAsync),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    //another way to set validators
    this.dataForm.controls['password2'].setValidators([
      Validators.required,
      this.samePassword.bind(this.dataForm)
    ]);

    //this.dataForm.setValue(this.user);

  }

  saveChanges() {
    console.log(this.dataForm.value);
    console.log(this.dataForm);

    //The following code is for cleaning our form, and it is going to have the initial statuses of its properties.
    //this.dataForm.reset({adding object's properties}); or the following
    //this.dataForm.reset(this.user);

    //Another approach would be, but it is not good.
    //this.dataForm.controls['email'].setValue('something');
  }

  addNewHobby() {
    (<FormArray>this.dataForm.controls['hobbies']).push(
      new FormControl('Sleep', Validators.required)
    );
  }

//For custom validations
  noSmithLastName(control: FormControl): {[s:string]:boolean} {
    if (control.value === "smith") {
        return {
          nosmith: true
        }
    }

    return null;
  }

  // Second custom validator.
  samePassword(control: FormControl): {[s:string]:boolean} {
  //this.dataForm was overwritten when a validator is being set in password2

    let forma:any = this;

    if (control.value !== forma.controls['password1'].value) {
        return {
          notequal: true
        }
    }

    return null;
  }

  existUserAsync(control: FormControl): Promise<any>|Observable<any> {

    let promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (control.value === "franco.fral") {
            resolve({exists: true});
        } else {
          resolve(null);
        }
      }, 5000);
    });

    return promise;
  }

}
