import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // Why we do not unsubscribe the subscription here?
    // R: Angular does that for you. For the observables provided by Angular
    // like params but also any other observable you may use. All them are managed by angular.
    this.route.params.subscribe((params: Params) => {
      console.log('User Component params observer: ', params.id);
      this.id = +params.id;
    });
  } 

}
