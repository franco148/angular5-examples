import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   'username': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'gender': new FormControl('male')
    // });

    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]) // Can be initialized with some default values.
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    // We need to explicitly cast
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}
