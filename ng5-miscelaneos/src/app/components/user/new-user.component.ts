import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    // The following is not going to work for child components
    // this.router.params.subscribe( parameters => {
    //   console.log('CHILD NEW ROUTE');
    //   console.log(parameters);
    // });

    //For that reason we need the following
    this.router.parent.params.subscribe( parameters => {
      console.log('CHILD NEW ROUTE');
      console.log(parameters);
    });
  }

  ngOnInit() {
  }

}
