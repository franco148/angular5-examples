import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // interval(3000).subscribe(count => {
    //   console.log(count);
    // });

    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    }); 
  }

  ngOnDestroy(): void {
    // If this is not unsubscribed we are going to create
    // a new observable each time this component is visited.
    this.firstObsSubscription.unsubscribe();
  }
}
