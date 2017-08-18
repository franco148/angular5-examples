import { Component, OnInit } from '@angular/core';

/*selector: 'app-server', --> with this notation in the html, this has to be used like: <app-servers></app-servers> -
                              This is the most common syntax*/
/*selector: '[app-servers]', --> with this notation in the html, this has to be used like: <div app-servers></div>*/
/*selector: '.app-servers', --> with this notation in the html, this has to be used like: <div class="app-servers"></div>*/

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit() {
  }

}
