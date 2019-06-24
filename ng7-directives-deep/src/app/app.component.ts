import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng7-directives-deep';
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false; 
}
